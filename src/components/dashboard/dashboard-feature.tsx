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
    "313Y53uYaCk15TVgsL7hgpFfitWWKovoV1PDYJ3LgY7HywgTieAQF5SkyakgtFd8Aj8k4VjxPg8ZGhQxXR5J5xun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YSJQUFkDj5fGoA4ryuFkGQ8MCrz8An3Lvg19txtnzxS3ZwJbfBZbEYGQUhgiRiLyUbTEQy5nndCKAmpSHsC5o8",
  "key1": "5MhsykcEBSnw5U2HTjaHieQGgL9sctHnmLmEsQ772nNP3g8nhrj4t1Erbxnawjz9chBpw1FC4mAZN3p4Y9QToMfa",
  "key2": "4GoPZzhhPBak2BFZcPuBVstSeSTeykuooU5XeMVhZc8n2Rz8DHnzrmVVA8xapso9TLUcXPt5fX5PTQC94X1nW3qm",
  "key3": "5txS2AH5jEvU13wVW4Nv3GGHw7JvGomUdBJHMSedVuyD4AShtAE3h2pJK23LUErWsR8C9ULAhmNT7MazDmqfLs6U",
  "key4": "shDcAVvNdPfgjtti4wS2bDjn3eLVLQw2AWsUHm2q2VcCRzpXiYqZM48Y9LbweQcvjcphuFZbpNEy1Sk9MCBWEBW",
  "key5": "4Sp452sXyknZ5SPDio8XYNGMkm93sE2sgqfy7W7946WJCEiJEaZ3W4drbgk5WyBhKqfcuN3eV9xvkvRRSFG6BNbW",
  "key6": "qeF264b6hhdCxcDVhohQH7fTc4Q9wuzDiJ4Y6MMVEFQVpMjPthXoHZ1EuQqvQfk3RD4qgRACJjbVjnetMWvEi4M",
  "key7": "5EAqeCbGdGPWyNquYt9nBoGDmpE12gBuGRkgNHmZQrWL2KC1Zwx2yPBRnFk6EFAvqQoVK8B9AprwwuFLAgjf1JnN",
  "key8": "35KgLqy6xGaC9BqmnqU3k5cj3fZkRg1b25y4muSLZdyY1aZNQUMAQ44rnW7CpZ7srnRWACwuLZqgkZJdYRR4pqH",
  "key9": "4mTPyWhZZcvTybWXNj2CL7xi6FPkYcTCNcrXEBeLmHWcuVkZQgYKZrEHQbQ4XqyyDWrjmb2SdZ944orKyYHLuiw8",
  "key10": "2KuxzasvfFZxkFNS71kRWVj1FVL361CwD231wrBogNwB96F6jriFkKwM7DPkbVPAa2kM1LApSz29UvvYPC9vDyvU",
  "key11": "3RXpUJMfFRnqL5FHY5zi5ppRXbbHXjXn36tLKSyTLAzQUvUcBn1iFbqDi5m5NXXT3QgHD1LtimJhxgPaHYqVooiA",
  "key12": "Sp9b89f3eVRMCib1UhoyMfrKfCcNmyUs5dXx82117ckfspgG1hCTzAxanirdUxVsETig7XPFguqmygSZL4tqMYg",
  "key13": "55aDWraXJBk9C8LaeWf4zPa7daJ1dz85seh8jQAiNRWigxjTcMBszvfpFtFKV9gkWMCugdMbW2qu64Lij2UcNfmM",
  "key14": "1cBPF4hMEfeoT3raxkUo1ZWazH1CiAmYfkjmSsEuzBtq57nsevFQm5MohRDsTxPtx1jFoqaHagsA1Cz3kMQtuTF",
  "key15": "2biQhwuDwsXqxNomevpjFonSNK7MFUkyWQdKpjaxcfhLYHEcjFsZeTUvm3RzYZWt8abevPwV3PqSr8SHSb34kBS",
  "key16": "5oDyTVYh3mm1KihfU3Cw6KkCqaDS3WicGCAUrmWZEnf28kYxgpPZW5Pk2JvgyDjfaDHx8r6SG3PjkRAse7341UqN",
  "key17": "5v6bZdLZmcu8yz1vZiMb8jGvTqedDFdnobjfYjXTvqbHKEcJP7LCyaYioxfe17jzdLHjgLSdMArqgpAzFg8AnNd",
  "key18": "5ks2a5yyss2P5d4t1isPH2E69uKDUq4u6qNHpHzaMhm6FW8SR4uPdk2293tpq63f1cMS3T4ijB95sroitz17wEUQ",
  "key19": "4MiBZTvopcfG6UxfQTsRoaW9CjcRsEoJnPSwZLdJbTHAYt5wjy5XvpUrxv1xGN1u6giu3X7HhBzY2KBK5t5on543",
  "key20": "2r6m4ykCosPy7Dq5gNXugbFm2qQAnJpuQN1KMDCiziCKdVyv1rFRdBWk5aeYhne78Y4pQTyyWZgw1HkumYyMhFJ5",
  "key21": "2V56CKZdC8Z7aXd6y3HtGMqi65G89QUaHbPvBr2sPZx6dpCm4nfVtrJ7mkj7efDavrEDYNq31EYyk7GqTpbhG9Ua",
  "key22": "52j576jWgpnX1DQJTrroppqab6817JwbaPr1GEFSjbmMXLwxckwx1cMaEA9TwBY6pSMQqmb4ikXSxqvwgLQsX1Pj",
  "key23": "L3dNN94x81JCTuG9ASytc1cdqkDwDuEMExzbmRTs2RX78WpeWmdpgR53cC4maB6MkWTJJoQbshZgTgk1foELmWL",
  "key24": "5KmtquHkmPeS7pKXLEHoitAaSC9iGkm4DcUQdtVesUD8nPK27ZvtZFVi1vgwhrghXcFV3FwSy6jUSnB8n3Lmqdi",
  "key25": "5tegPnfkzdnYgwnYkfYKYNhFp8h5n1dGLMnaMhKrCSHz97M6GoifeH9BZCeTq8pP9EWXAXrCTyBRkNpZ39MjJ1yF",
  "key26": "5ngtMBWC6A7N29LdZWtEbK6MNdSzT2SNivmV9GogmTA4C8XXCpEE8K8zJkpdprdUkjCigd61inU5St6DpTvnHeou",
  "key27": "4v6ByF2t8d3dGoAB9aQH31jAV4d6hbRQHDkZNcntrNrnhLYy15Ex69NiAAddPU2rkWdsF53EGH5omtPypkhSwt5P",
  "key28": "3fkcasmP9k3PDKLYwcsp2zzqofUhBWPvvwTtVwHKkprbRLmcS2zy7RFB3ThifXPEEf7uHRu9rTh53Mx9X8P2otgv",
  "key29": "2m3UYHSArHKxPS5XFXDRuWD18bYdtWiHtHuGdfEg9cKhwnfJKYMSHbpCW5BExTCUQt31oVtkUAiSQdNoFD3Mfj3p",
  "key30": "2s7HAEXzFyGDsw8u9SbkCPQmPeMJYJdCQQAB75ceKzYCoGjPvtD19vEPt43CnzY753BhErYPnqJiQdm1uM149J5h",
  "key31": "3jmgxsTyLbUfnTyGggX8FYqDBLY7F3kkXp9PxCZP8M2R8ZgeATnpRHa1Kb6GACEA2Bdachwdn5FC1j6nmuUsx8Zx"
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
