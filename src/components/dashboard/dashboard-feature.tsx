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
    "4wNNSABeR8eTtT2hgz7ZcepCkfuDtcvErBFWAANEBFSxH3y7ens2HGjuJGrH5RSRpMokeMLG3RTBoZK5TTfzrZY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imCFzNcxRo2E6EPUKyCwoMAbJVVJcVkVYcTuz35XYsSrTJFPpDwZzrYUrRCjUAwzqk1YgGEh8Bc7bFNZLjGCCZD",
  "key1": "3d2vaCVJnF2UCVrFG9JCmReEgC7xZQAbYa88jSxgdU37rdbkt8eVAwMwVjrGjsgvdf2doozkKV7QqAth23Yz2iGa",
  "key2": "5fxN3rpZe3BrrSf33XmmLtHVSTLHBXVAz7ne9ciC43xqEaLTbWf3rcVFphrdtUdyJLyMetXacMtkQN9wo3hQRpz8",
  "key3": "5GvieLDT4CgVrn3VKH1Y8qdzkmxSXiNci1SnYVkh25vtMQZTZw4QibW36UcpXhKtZuM8DwNEL7YMarRUbV27xwNE",
  "key4": "3qaYPDTGYrKKkHEcRNu14bggfKjsTjdq1MtTTw8tgpjFKFJCteqVQkRbfLEZsnwcKbYCNsuSRxpmRf7SccWaAtkf",
  "key5": "3jjHsCv47vjvnzFKUvJVsYxpvkmnXmfyhmvDv6ew7rEbMmiMWGmqAL16E3LXiBPJH9twWWvFQHzBirXXQdGX6jRE",
  "key6": "4CRk8QbXY3bsp7w4JH49b4jQPNwDeq4hv3DmuRM9S1aWVt22mcqTg9TsgZYAJWhKvoWUxb6jkRQGceCAwnaBqjsc",
  "key7": "F5GF9Z6md5qD6y8LMyMGLCYZbB49FV9TfLBGvWyjAPCxMqwfEVaM3qdKyrHwDW1GCfCDqfAyLSmzQ4X72NArzMB",
  "key8": "5tvj4mpL4J4B3PdF9sy7gw7ThdG9uwWzZZoae4ZpH2LjCi9xVcWYQc3WFdHKCsVYeQg68qMYiNCunxj9AgtQZLqL",
  "key9": "Nwy3fs8isaaB4Tqe17SGyV3Ex6cSix5w6KAXSgS7xZT92eMD8ruegFDN4HYN9auAmysbHdPm6uCA7Xm59unw7pM",
  "key10": "UZyawvpzXaSKBgXAEytzTMEsDUxAuY5D1XxH6kzuXMBJEbiSeU6G1NaEfxtvHspyXSsGndbAFyJMHCkRaAbgYKG",
  "key11": "26CaepFfiHANr6GSNAyCrwciRacynrgjX5Ayyc93LWnfLPJfsMixQpGDtLNWfoBnTMBQ5XURwUihgP2aBCZ5BrCU",
  "key12": "61BQeTuyRRsJ3rqz8yFa4xR3YcxipsLw5Lmsfm2QgECYURKPhAA1fnYGLehxM6ikojyxF3aCyNEq2c8c7s3Zaheq",
  "key13": "39WpSCsqkVBYDWUF8rji5HUu1dG9GnUeasjaxd5y3iybSC4kswzaZBu79dZB8ZeAsm26kXQanPqvPpcehF6KkUcz",
  "key14": "35W1kk7EV6QkmTiousqCuDYFfMPGaPFVmKRJsyHGW8eVpiMvLGHVZjY4CC6Zi3NEsNJkuBL3u1U1skfFL4zi93DJ",
  "key15": "4d6u7CBSJFSdcvfXdhWLEJwmorGjXtDwJWMEDyvJfGtr5xsxjdGiGevPcHhg36z2PqteikYBYNo6QSx9AzY5Qhmn",
  "key16": "2QHhYVmt2pQ5ZyYfxDf7sYdEdxVj1ZQW8V5ky6Z4gbwQfWGN8cTK9gxuJ88xCsHSxhND6aqePfA6ftX94jsvWfCw",
  "key17": "4bq7G6ufqQGqa85jdVcEFU29rcWpMpuCDCCH23BJbLy1xxv9J35KDYvvKkuGEwfv1DcUkgXT5Hd7KnJ8zXzrYAtW",
  "key18": "2VqVAWqXmvzNkPzsEpj7xCtCADZ2gvenjmZhauyY2U6d6WgUhzhuJZcjrTUCFLH5j4aQrSb3ACpSdFSANSd92BVv",
  "key19": "5onL9Rygq1oUxpLFV7PGHuKnG1sZdsyyhZDXi5Se8aUpshskYbiVQVLckgiHYj69HZ9HYxcNqLXHpNCfC9mVtAak",
  "key20": "2GsDuVwxCtXPznieSfNLWhinX8UqLm3a8RnczhXezzDPaVnYyTu6a9rNSGo9JC3QHps5LFAyxfakh7mBsUdf51eh",
  "key21": "3iFSqSYkU4gvKudzgWoRSPE1NTvikGh6CdbLUh1FZp4w9GMFiq3mWYeQNREWcdJxaLLNCphcQ5TveYV4pFaYuocN",
  "key22": "4bjKBfAeQAecfV5xuzpFkYKDpCisWJiMqZ98yTBrciiBMsBhTv97T9oxQ5Y9En2ZoWYRqNJbrEXJNMYa8GWBrZsS",
  "key23": "35gLtohU4Ngy2AiEyXXK5qMfkMqAG86TRR1Uf43xfJtCtEEzXbPqTB8LY7smqYRg3vMfRK9Fw9Zto9KYafCut1tJ",
  "key24": "5kgh1v4PPbQNG7DNbj758xd6sthKok23BL4cUDpUSEiUjSYyGahBGCSiRUtGmmem1a7jkgyjpWkZ57AfnsD1J74h",
  "key25": "1AmoWacvhJhdCDFCaWHpG4cjFJygUCfP4ndzHV31d2RyHyt3rBKSVbfUjtja5LufgdZrTCNze1umnybdJq1x5EL",
  "key26": "Aij8LbzZ4ATr9tp87QknUad47SCwUoCw7bqcVAnBMAM9butg2AAkvvFyNCsnP1rYY6y68wZQMJNP5iEweDyRoY8",
  "key27": "4KS74qsw3XXBtKvb3Bfk14ro8a7xw6GXXm11uzyKi6cYzPwAdcYxH2pTBqQouKR2EH563bSBTuWsj9mtdPgKMrRW",
  "key28": "4ix9i7d2Rc2rppX7APU3K6eqe7nh5ATssPrT4BgPssRF9QB442xywoX3L4Kr4evtEJ9dc8zZMekXUxVt9shRuj8U",
  "key29": "KzGfxoPP1bkg8ghD97Wg2jFY6NuXkezu6uPaBHEEvGorDeWe88k6pL3TE1tn46bfQwn4A8jnDKCQwprH5312S2Z",
  "key30": "45uce1SmQ7JyZqAkVKtCtuMaYBpftURvEwK8UKTJzZzc68toxBKWJX4ZfjSnrfF2UF6JJizG5UUKyz8P46SfoauA",
  "key31": "3ziAnpLhaQwiu6JssQwjrBsa7vo4dcU4cUzaYWSUcDuy4fFVe4GmLLbdvXEmW3VSjSHGWCcY8xcMahfQQhbnP3Mc",
  "key32": "5Vz42Lzz9aNa1GyrXvx1CwDbfgWviDAfZ4XxPsdq41DTow7yQm4Df5S2uNRNcQA3kvpFzVbw24QgZHP8HCUM5Tcs"
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
