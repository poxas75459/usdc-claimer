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
    "3udcBzUzF9rJfYHnJ9ZYPPGRJ8GKwSAhFC4Lwotsg1h3aERNdimPhyKfbhpnWWzzihFg1grnQARXwj5Eaz5NF7d1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiYf2pLuqEwUWstL4CAJod3eTxqjrAyKVwtbiQG1X9bSbBM9sPKBRwFn7jFkBY8hfNKMKa6XswTwU1g3Xh3EAm",
  "key1": "1G3S5sCWnv3mPZm6A2MaMgweULTWZ19v7DE9q9saSac4XeLUkMmKBg2TfUnuWhtE5DjGXEQhMV2MfkuXoCVZd9r",
  "key2": "53rqYrBhpywqPc6i8ZkvG4XuQgX9atCvPLCjzWyEDGP1qjRGhsxKh31koxwnYSSXuQub37HHgYGaYxhMHR2VnViP",
  "key3": "mU1puAritHWBchHzo2973jHyk5RdzD41LwByafKFkP8TofeZGXaVWJiCcKkdxFYo3DbDDyDS2C2wCCFNV6AWtB4",
  "key4": "2AAfFnqCjXRVaWUpCdcSryq7MUXtCpcHmDpGWrQ1E3DAe6sJJrKUx283gbFNtCSxauK79pqzb2QPexRrUBUM8Jhn",
  "key5": "4fZpjjo2q378VNw3JbgSwbdBgjwGPryPrVJf5bxHuvEMBvn6FED1Lw3HALy9T8ZaPo7FFukTniHpKK7WvbzsAfzK",
  "key6": "5pzfkqUgrKHxmkaSageiWYVT3dN3HJJ5DBTKEsSRcfnjhR8Tc6mGtvUEcivJixTuGD3PDjFaxATyjCvsZFWts8m",
  "key7": "2SvvaJJjiVtcXzFWsuqNmhC1NwjX3kyfj3pniuyAfJwcHYWSRY3UcZmayhLoR9k3FA72qU5PWAoNZbAZ5kY3WKar",
  "key8": "z9iucMbQJ5SSpiMtM87AGLWMSvhBDuMnMZ2wbo3pmSeL23GP1Yj5JSGXpfdeBnsgxGmbitqoQ2wWZqCVL8TDpcH",
  "key9": "vPj2tjzQLq4CPbY9wpotZczQxTQZ2BV74NgAvomXmN1fBp4rtFSxrV3UArVgjFBfd75bUgEU5WorkHQZhfpKV8C",
  "key10": "4GpNhqMqVjDDGHH8bWzhbMmc6EKKnn4kMnXHLF8iH4SFqVUWNrFxcGu4yNFiFvWMYPThny2XFS8epRmMvyNUd7XX",
  "key11": "2qEK2K7UYS1FDc3fADemcEtD7EY4HQaYGHD4kGyKjCgEHdjvt6kNv5AJyCra9mo7AbK1yCSCr7J1a97LCzQTaqAj",
  "key12": "4en2H3QVAHJELACvZD7So2A71npaRmnkmLtx9r4qebVC4KZqehW5PNQXAQW5qY1uChWjgupECRHoRCP5R2AbS9do",
  "key13": "3YVzR2V3QQNtmNcDaEqNRJqju2ws5SnmRsqxdo8X2aQusy5Vhmfw8MbNVJdgNyYkcdpacZoK81NveW8ELmdgj49W",
  "key14": "3WhFvh7t5arq3qreVSZoMt6kAZNkJobwiUvzYiuTmHB8KnyykDpBSuS1iQ9SrixbfFsvXVVUTrAo2rxptpevwLWj",
  "key15": "YM5SuSbPhpigdDgRemsZSTWuyiGFTmrHMpwS3cqfauVhSP2wh5uRLvGLwdY6LCoQEH44qpAWLjCMJYGiZzZt6Kn",
  "key16": "56UdSG8W9iH6fXUmaxNuAnMJyw364ArGN41yZ6br6RQA3uXRSUHbjovDXxNNMQNTevYPwmQoWfdJB3xik8262bwa",
  "key17": "2fbqyb5pgMmHNZTyP2Hrn2HcBJ95XETxQRh3Ki1p3CP12VBLVkexcbCJjSbERDPQRTMgCDcdcozWEvahDTnLWfyn",
  "key18": "4yNhHeKgrfNQVNXyRqYwXUoa2ARUjmG1eSw1jD5rV4EJHKEQFK4g36pApZHkuxyfifKEnuc2Dvnp2H59acBNBS1W",
  "key19": "41HHLMBFbvKrJ6VzJQRwEAUZceZgSeByWxPDhu8U6FpBEZJ6EFT5qQfNkMrm3sQcKtrmwqbCYRx82PRZr5g198we",
  "key20": "3ppyXASUPJLDW7RU3K1PftfwuXej4k8oVB2fYVEPfriw7uonno49s2ggWxZC4BcH5QGN2RsswPP8WYwZhiyTJbxB",
  "key21": "4YLmEscpXQoLo1ik75BD7WEU1W9GgCZUCAqrmYgLdF9aFKaaqjbrgAkoSya1FYWXXgDVzByUR8bDXBZZud1RpeQ4",
  "key22": "3TFpJFp9DdWyCmBS8TbZkuznwfsC27MexNpuJ6TbZQD8XvNsFdCjhQxegTGqmrEBLQ2kLQMmzhNfBE8dEbNVsR2n",
  "key23": "56NhYisQrzFm4wJFSpFoh1DTFNF49mPGc5xMkzqWzrbvFB97B7HAkGWuZiG6AyG3W2i8dx1oJAAHRDZVDSrJvuj5",
  "key24": "4iGvwSjnpENHtSgRtT7dSUZ2phWtPaKPcv7RZvnnay7ghXQ4ZLdHMZTAv3rr9sGWJe9xezzz9RzuF2zWJzVh82B9",
  "key25": "4jyvkP4ZLbW9kwTHudJ7uA2gvTwG4umzB97upGv4be1J5aWQzfEs1bE2XJwnEYP1AURd9UZQX5Lv1jJ8oaPH3Gjd",
  "key26": "5cA2qN5uaJUP4fSBwB7SNZSJXCX2x7amAEcizc4AhXAjYdyH1VZJtvCV2g6N871dZdv638b7sJaFAiemd2QGMvHW",
  "key27": "MHsvsJkv2D8jgaE9vmgqFtw3dTXMa6vjx2rzXE7PzWHkHfZCrDELEzWHbwar9XHDX69K5hWREU6hzY8AphV8Ew2",
  "key28": "AAxXktEQ9FZbTYn3mjfTZjAKu4BJbG6XPtgjHx76ptCS6PhHvaWLdUqMxsU2PkjTfXt1sVPR4kQN74n1AH547df",
  "key29": "3Htg1vkGkU5VqddfnP6ZDnQYRhhppw3q9n2ywDvN4Z2Qgfcv7F8N596fVcArfdRomEZgQjM4q5pH9d5Um7yRK2Gw",
  "key30": "5aaaF8cMUkx9bvjkP6FAUEpwCVfpokwyzBE51uoMdW8vb74y7expD44UjvXaw9sJzeXbqLiiHz8YPBGvzawCqBxN",
  "key31": "4gFdLiAEmN78JuF3E7hWuzqxnSEzjVyJmGejBeUcns97qbPccwY3QSTJ3PFX91k6VoZMuBVhpLtXBmq9kMJE1ikF",
  "key32": "3QpJpQDj126NByPnWh7KezqrWZdtvsKNWyr7JKqYrKswoa7foSc9MnzUtGQbAGwoMdrhvvLxhspxiQaDkM1yJ1LT",
  "key33": "5XP4pwytxiSer1f2oPUDCraSvUdYf1VKhfsiRFcCuo2aCMoXVJsVsD3iCaotBZSmJAJbeZZ61Qopi8Lh4X9MHGgr",
  "key34": "623WLxg5T4SFihRKwuZhP2tVA2qNUVZQqrnGkCQ9nM1rw1X2GXfXht7Vk4JbYZ7wspBBdDpSm5YkAvzuu4L3TDBN"
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
