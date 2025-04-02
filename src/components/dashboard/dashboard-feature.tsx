/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3z7ccMg5dy2TWeSPY3oNs37AFCgSnJHmDiHyipUGfKAQu2ufPW1v5gRVcDyrETa6Ydgpidddzc5VZ98N9ji4XHGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EnMofzBdv4Sgw4R2bdNeaDT4MwhQwA4nJPCXcViveq56QnK3yW6TGXWUypotbdgU3VTkW2r4nKpaQEzVijEc17e",
  "key1": "2QmJnciEUM6okuN5e5SMeHXVmJ8KQQPrhPzQuhUiZVgJp5v6FHNwmg6rLgr5fMYsBF96apVgpZoZyAtPHpwivdpX",
  "key2": "5PUq95Cd1uweFTB3bKyDVms9unY6S52Cs9x3JPkZEWAtSyyaP4ozDvmhejT4bYaX8WVoJz8Ng8p3BVGomdcyCxFZ",
  "key3": "3D8xPpKivW5SfwXqZ8VxZi2jFy4kMrWenuXhPTRVweLLzjahRRXEPMaZs3fejpDxNtbHY1Ybg77qCqr6kEcHu9Qj",
  "key4": "4GFRYrVPtLjMZhtddwbNmVU166wejmQLACwPfxzBMH1vHKggiKTpCkhH2VscKQ2ujgxgGwQCU8E5kjwuFjnZjenq",
  "key5": "4m4K4nnCbkXuAuQQnuBTcbc3Xm9iDZRJrT1xsCnckxxpm9H3GdrDgsbJeyhVHd9xztDGgyQLEkMUutx1QhzcVj5x",
  "key6": "3b2tRNfCxG4yuTWiYf95V3PBtjTJsyBGotWShQdUCFzxzR2jszgoSyDDfdB7ByzX7V96sgRUvHWmDar393yh56ZC",
  "key7": "4Vcw2ZE3UmZ5oUAbLs8crfydngbKu77Vc1Kgangt5vocAjLzHZTHrNzPWzXvHFGFZdZvpobyewKLtsbvEeFViWHg",
  "key8": "21cPTGC8hs7sjZAxw1yJQrh7pjWAX8euEVT1ZEszbYTQ6zNS9b6Bnf6ibQcV2gBQZBB5ncA2fAAdW5E2oTZbZDJa",
  "key9": "5p4dURxzeEH5EKsNiNNenLCUduVzb6MTZEXoYeZwXLYC1yzaQp4D6r9tkjot2coRKVPBTEVA4pf1KnFUVoYmB2fA",
  "key10": "56KNZYMRVQGCrdM9XQh98u9QNhuyDjTbmYM8Y5qunShnHPvbB2DmPUtMkEcL6QTVDhgh9F3vdKCQ9rHv1XmmrdDb",
  "key11": "LwDwUtt3ShdEw2jszJFLj5uoDdSEsycqnzJQkoubff6NhWhtfqLU8Dra4RjTHZWzanYQopkUiLySbN1NGaguwtr",
  "key12": "2ieSezgjfpvqL5aSdeWnaVcJFFHvHFEz3nRidYRpcvqXL7iZiVvrVXZBhZayj33MGriZXTwnrSV2tbbnNDkDPWR4",
  "key13": "gp565XggDuvXFrqWF9QJnQjQKBiu2MUmu6cgiW6UVojmRK9Vvzmd2r8Z5kc2oWRvqEmhPmK61emvGJ6fskkRJBJ",
  "key14": "cgkghT5pUejiKAaQVFyHdfTZYeYV6gT4XfFsU4DU6fAgXfuJuW4aKKZqJmwnHAHiY5W2ZAKepRbsptWPqexS2S5",
  "key15": "4UY9BeWhPMPT9Zv1nLq2Xkat4QQmvbXUuLQQYFuqKGcRy7XcgSKHfDuK1D5trMzqr8hiM4GaUbEGD8MVajfzmbDu",
  "key16": "vxxP8v3iz6XBGebwxovq3AZrFhGZuGJSUk4NpGoYjNXGiW8nXnwryD172SsiyXowRzswuwe3yhTqHRZoBnn2szK",
  "key17": "54RZVpgxSuDzjNvQMFuP3A5pKR4xPUutAgB3byAxpnF9DdLCd97KbpqeQ7cY4acPLBJQyU4xmJD7S8pbr4YP3hx6",
  "key18": "3pe32o784ssen5vToJqJsZompwSz9YbdfXss6AEbcpGQyst4U6dWhp4MeaCERov7NFHaxThgQCHcE9gsBw553LLD",
  "key19": "27RceQ5A8MT9iiC7pA7UB4dkNVkmQrwJMjzK1eXbcQvYfMH3D6gJr6rNgHNHppquGKJW9Kx5mkCNgDib31aT8yU3",
  "key20": "27AQZ46GHSbfKaVwShhP3W7d5px1TXN6MTPGzzAVBQ7aqsHTsnjY4JXqihMGi3yuUnVVNkamW5RWp4rKoJrxWVip",
  "key21": "fQ7wLg5sDVsQAf43hvkEiTZqg1xHuFxyJBBK7xh94q2LuYgXw3sSCgmThDy44eFvMurXm3Y2P9Hpd4rMn2QeXGs",
  "key22": "35ZEcquagmZGvVuYXrxeUxopujyDRSkQ5SW7u9Y1DxSaadFmVGmgwo3cMQ1ey56efYjHM4qBkWvxBbtHQ6sbXXvV",
  "key23": "2LodTvqGZo5CW6RPSz5TpcuaWbaHtJuZ4kb56Zv8oueFaP68HreFUgGNGA8PvHhj5kmpSxadiXhpSzvCfh9oBhmH",
  "key24": "4cLicvwYaajsYnknR18R1sgs3jvgscq1yT1PviYJqExvw3ZQS8d9FSdjJ21gopVGjeSjGKBWN6aVzxCMG3tTMLPg",
  "key25": "2uZXMxDghf691M6CpZcHBTToYPbxkw5kYaNK3CwFfgzmnG1SFbNdM1KDyNeuWbdnup4eF8nWrhdgmoEDVSX9TKbB",
  "key26": "32UwLDgj7YeMJYxtGKsnVHq4aJw5WH9EVr6EHe3EmbPBQAGorvEqk7BQXMkJss8rysC75F5rSMaRFUrr3jGzo5hT",
  "key27": "2QfJ2wjMh5Q9yEkqQxhkRGU6CiJNduXA4uMSbwa5o4NZcubZuoNMEvW5dQXToBV2B2t9Dhaw7iuqrS2qkWZZ8Jar"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
