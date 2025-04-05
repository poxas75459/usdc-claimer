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
    "3BmrTJdaYm1rk4vTNEx6CGN2ad1niAeaMYH41Dbfsm8sddbCqXRjcrbN6fCCGRYhdZCSTRLRgwextyuSUHY8zo2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPWRLh3EFitDSFGFcWLZVxhm9VYNbEPRBbxssq1czT26pXqLSfTk6mqrQJHqA3oYGKGpPeEbwx4buGcTuq5Jwe7",
  "key1": "3WHVPCcCiCaJxrhRjkLZosravAqNG8rp2ShscLYua3b19o4B8okqQzoFvZmBLDbPGTwyFiRs4uRDQsNLMs98KqRp",
  "key2": "3PrxyasoaVmdAKP3Kar51SrNdHet79swJQzRZSve8Ag9MXKrem7Hnap7WNhQwSToik6ZoExiE62BFnVxAuqnseYt",
  "key3": "5g6dwJBwo7zLD1ZogtCRnpvcMH6fGugN2TGSEQFZyF4YrgnmdRoRJkEtEks4Hwa5rMDaHgvJNfx5ra9NGZwpdkrC",
  "key4": "3U8a4hGaio5Q8bdKQCmUfoHscoQE5AdE9nLtfEpNqRDeVPUQRraLP2ExnMAM2KrdPu4f5cBYGbi4AK5q4HhnFJGX",
  "key5": "2Bf6oG72shmTwafgbNjREtKmsSpcQLG93LAQuqv8ER97SVwMJ5ZCCLpGjAKoMKoiPWiZLbKjQUgD5yaaWbPoy9VK",
  "key6": "2GM37iKd9ov3awfoy33z5B3i5AZFUHfeKr6ptwwfMp2UHnx2NMN7zVKGRaGwaWHDYapsfw2arYfKMncvuZkpeCH1",
  "key7": "24xeUWSxcVyK6oAU1cMU8wreL8H4W8xvqomjansc3E6WMR9DVswCng3yCy7QhRUPZcJUEZDU65gB9Dih6RB1qzeX",
  "key8": "2LufQNjJ5eXKWhtHHU6TTTfZwJcA5bxTKRUrEsVruH4SVyzxktJmsngJhCiH6mq9eY27UNjmUJshknbHJiE9UyUz",
  "key9": "21thjoM62yuXtvbJfNftoB28YcHdwbN7Cs6sH4AGkW1S5uyW4dZ12N6Px9TwKEFnvbg5ta7i5o2mcJgZJVPXB8p3",
  "key10": "64Rpj44WMdJq5FVP4wqGiV7BX2VdUHWz4xfC4Z7f1dmSyTFT6gaYGbmj4daZG2umnckZVWvK2XmuipLSGWL2uRMF",
  "key11": "fBhjB74Q4NaJDs1a7hwrM2MmPZrpfZyBbUYrMfvuC1PnJnQoU88Ke31wBHA8doKqhHWNA1yhGWKmoViNJ2tBds6",
  "key12": "5L6Ru1SkutUhDq6fd8YE2JREm4rXSdRPuQfsJmLfRVgCbjtQsnop7viWcf9CWuTCj8RR64hyyvsJDp3rWjhYLjaY",
  "key13": "2NQWy7Mkr4WTSSYPs8KCRPnit3Va6oaCSM3wf9pEtXkSPZxZF7ijg1fsTBsAeeFcqZ6U92gMsZ71kwwR9kQfcYDs",
  "key14": "4nFmVp5z4fnBKaFbT8S2AhVmHc9JbnmmEV8EZdeLqBGm7UqtWEj7kcdWKMh4E4oaBjGRtGxfeG8bJjD5u3bnt7y3",
  "key15": "2uwKDh78b6dMCwW7E3pQTUFqzkZ4DBC9PNrKRXzuFgzYRHEuscVWVbgBp4PDbeAqG9ZYTBFJPaojg9xbB3pwc9Hk",
  "key16": "5E1Mz28RqJoECFRPwNhutjPsNVxwJZW3d3RkbEpBSRWgYHXdsrPXKGJGNrwrVVfdLCo4qegNfR9CYDBpZNHgYauQ",
  "key17": "61aZsxQ4DhRTFbympctJWjWKgHvKuiryQNhvD19whSY8YeyTPnoDS3CnZDsCsacJtuCfEd9NFhfytUDjemjZhAZe",
  "key18": "4qWtvv1Hqu8QKv1RgSjuoDrMaCJgAsY34DTPEYXY7yqE1Y4uxEgdYpdyucH41pcFsmPY3QBScGAn5NSmYmZnACKE",
  "key19": "5vxiXpGkrq8TivRniHtGYiwXRK7SAcr8Wtw1De1M9My5NeRAPFiR1mdDZmPgwVGjxMCPjgBet32fLBCPkegv5a7w",
  "key20": "4ssPAMESdJvksNMJstbLoD2XgHLARQWGnsambcHcifU8MnxoqecT94EEg5Wfdbirru1pxiDUGZWZqcrg6EhFHkEX",
  "key21": "2XoaFgr9meuPQJUGtPAykxGcUTJSEpU13tif3WYEEzkqCm1EhiWyUF5ymxatzJmBEz5xtcQBMd9GrDqRhpXHgXV9",
  "key22": "AHquoBC6yUwoKvpSYDhqjrgH2GPcqsS6TsNfzBCz8zog5WndJV6T2GU5AXZ8E6Ucvx98jcqVwj5mvZD9ZMhKz5g",
  "key23": "3XgectMir5aCBmrYJuuHH5Qk43Zbn9oGaEM54jLd9N7v5c54cVftQFTPcKPiy97DaCXeVfuLmpqG8Mt3NDUHtCGQ",
  "key24": "3Lw69NmJkMDXWXkfjbrFUV9x5sLYrc1j9GdSMYPyRR5uqQ1AT5DLiMNsuFXshyv38yDnUj4mfgTo3zeJtYRqLRer"
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
