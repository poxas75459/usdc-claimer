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
    "4pscDqfs3maAN5vdUHMaBwpMRg1RtHahiNyXJKavdBbbQ7aPZWtUTX59CzJUX3TntKSeSxKSd5bscbcb1YD8BfkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H37BJ1C1t3DmhvMKgyBXEHVLYCEFPfPkVawNYDoe95r5yaffP9kcFXKe4j5MKNtu2wVcpp46dy6vN7EUH5NW37Q",
  "key1": "54AQqbmtVKvuLaoG41tCRUUfJAQCivWszH21VmY8A9a2zajV3RQADM5JAQEhLTVttEf9JEEbtLcpWUvdaBxJ9EUJ",
  "key2": "3HdxdLEdgfBH7uzzqrBK1MjRzxf2aZAabhvVbDKKySW6EBGYVD87uihwQm3LTK2NYiaNLDtc4oR1hiTos6uo1mWp",
  "key3": "NLemGHPmQuKXbHZ4wKKnfgtARm2zbJzHrT3DsaoPCX8sji7cT1VjoXkpEZjs9LQsetCHo3mAqwWkjoYBotVrgwB",
  "key4": "5F3fmM2N4wR1vHSxpDdrPo3vp4sygtaE7RFsUtyKPHZWapMwGZ6J7vvguuqHQrRnGJcVhG2TZSLikgLQfKhco1TY",
  "key5": "3ZJZqGtC9UGMoceGxMVDvh3xoTRz9xvEqbKURmEag1Ujw4jFN3nGS8iLnRAFs3pucUJCMYzUVroUbr1H6SwDBL6h",
  "key6": "5d6uMt2KhGzH1KAGNoqBKrs7iANPVMhDigX1A6cQzZ5qmjDDFkwumrmPogmVh2WkDJZaeHxvjZ8cwLHdwrUDbpTr",
  "key7": "2AAgtG9Pd22AfmQYzDNVVeJfy6B1mbgSZQzYiBZm1pAuk8Gz8JXUBjyxhEqTJnjcxp8kjJfYRYL9PsN4G2G1S26s",
  "key8": "LPNMtzdrXtHWQJWj7MqgyAWvLkmX1cs2J73BajN824MZNR5KPyCnDj8pG63xrSg4BBnuGbXctwz5kkEC3BL6DuR",
  "key9": "9e5epiDbekfG2qgmNQ9moUHsJrw232rM6UsrgJnxTySkN6Rha1fBvrRY7GNTJu6WGbdWAL3913HBq7sMEbfudDo",
  "key10": "4oy9CtZc4n3CZN3ui8Nvq7naJuThietFcM2xzuJX5RHRpmbpZ3k7h8pcG6x743DM9g5r8B65ZBXhBTZePJuCMRCo",
  "key11": "7mhyHExTy1GymSXUZNaWDjwyKfwCx1MhqU5eBNiNm61Mh67dvEKn25xM5Jy4Zf3Hm3tetHhkst2iykUNvGmiF7L",
  "key12": "5bskL9yVsMMkiju7tsSyUjDnhRjyn2vSMkWg4XmFYT8T1YXWE9MwhAbNHj1AGWM6vYTBtRjnRBKxvMKwfaWqoFZp",
  "key13": "4cr5EiWzBZhVcGwqnEx3fZYhX9dWTCkyiQ39tkVBy3ZKGUzKgdqaB8u4YXHHzGX4aiJ3h3MXkitxu9469USsfb8D",
  "key14": "g24FTPR6ro2MgCeepYKxsuq1f1uT9H3MXYku9BGfPrUwGWczfH8DdcKFTDUFLdGC7p65Rhpk18v5kvKKrcnerCs",
  "key15": "3NZH39rJeMGQbpS547mDov4R3dnLu32JJD8iinFsRUv1Lamp9xNVJWCSjKwWWqLSwdmhAYx23cdxHnHDa95Z3spV",
  "key16": "2ofE9xMCwpMLs7JLNCydaPyV2f3pEZshAgrhNZkJDj8VuQA1gLiZyxwcCdvqnmjVa7GvmHf1fNC6Hhmjk5WS69qW",
  "key17": "5c74xzfFjxFTK81KSTs7CHUZWWCyH3o9d3bRfkN58uqAQXBpLmHAtJHdoCqeFhf2pgQdMRXPsR3AsMLpT9c1N2JY",
  "key18": "3hea1uHpevB1wc26ZP2PBZoEeq6reZsETCUZSQ2YxMyrCj636GvzQCr8XxcaANrBTarLYnDRZfSQkoV7Ai59fe1A",
  "key19": "efRJFCTiHNHNd38hFaDXGYAsbv8tiGWaUAcy3u8f7NUyKT2EsRfKBRF8hAXEkYVzE3nZqfDtdZPaui7XEm17mnV",
  "key20": "5nyLMXTzJDyZwFyC789zxhvnor1T9xr5XcjAgVS9iWihEirRUzTPMpo15fN9pcTQ36xWcPPCUV8NJZNDfHE9uqcs",
  "key21": "3JunBhJBtbrEjBh9inpi3djPJfiJqNaCbnggZacsCUqLpEB6avJauQ4FMFhQgGoMVPorq8KqyezecUbNcV84LBcv",
  "key22": "5DVLk7kYG567AHLuzoAqGFEFJ7EZqdULgBJgBVrq1nLjJ9D7xiJRMS4krTQnLWKtxycg8bp4BfhUoKFvckhMA5h6",
  "key23": "4ZYfjzfsh7Rh15LjQaJpwadjArfLAopmZsWTnGdeviLaj2H3q4uk738ykQWwx9JbDhsiUAN71TtRqbUdmwi4eWDu",
  "key24": "52Uz39fdAPYdy5Pe9cWW4gp92Tb7jQ6Szx7fAP4dFnk273GZP16UVhKiZnhcZJCXkgLqDTqnUY2hwZBxbTmmy6Yy",
  "key25": "2Y3xX75FyFbiNNdsvGb8rJjb46aTzdEAWyFUsbSYadBQww3QQ36hHoh9Y4vQmSXhvWNSBkXnAgt9AUa4yEALUDpp",
  "key26": "62AvXiE657MUCSUt5axXBZYpvZRwNEbZXg2ZoyvwxVAhfnCXFDNBKekbTCJ2LtJTm4WeXMTuB9wtKTiEFXeDJ4o",
  "key27": "431jWbU8kTF2nYNW2cp4rFtfRRctisonmZV9TUAovsUETBN1ZJRLF9hYo5itWw6rjCrZF8Rxy4YDzFPvYJNDvLbs"
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
