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
    "4MZMY5siQuSDVijWWY5N6MZynZqVxqbUARH1UZLHkpRbC8rmRD8VMW5DzgDa1qaeX8WhytyzePCjVnxz64qsTbAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDgoqfiaSeoz7ZRVoHnrJovCcEjED2GEMazm47Nzr4UbqgiaukynHKZmKG2uXyp1ZkU1vFTR8h12Wz4w7PFATAZ",
  "key1": "2VxsXJJMusNq2hKExf58y98hMEBynicCbfq8BPuxPY6Pp1yBph8QsKe2Tanbdmk8fLTs9rSxySDGcQL9DVT3FEjC",
  "key2": "Xz7JLVsPL4frVuPapvstsArvFMcLNKqktR5nfRroSQqVxVVoQxMqLXP28jjvjHwWeaWtJp32WSqVckXP3uZu8Uy",
  "key3": "615eQkKwg1SmjaXwkZs9Akfs8NjTfM6zMhpr6HE43xhcgcPye4TAPFWZSfrRbMS6hM1whVXPrAisHXXEu41rhDEK",
  "key4": "2zz5DmKEwJB1vuwY23YmHEMMtesYJz43cueRMtLRc9PD5HjrsX995BFWgDa1azhmosHoF7KPq3TvZrLp1PCkbxf5",
  "key5": "4uZZTEjBm4i3tschjvbdVp2p79xMxh7wSnpJKxKpwRXr5EUNTbeVoiziY1CmDNzkymFicYavcPi5Udg1iWzLb8SU",
  "key6": "4AfGvQR1MY5mcDj1KJnCr5rfdwepzMucAMLKVooBYmDDNbmEMGtqgF4PpXcxPwJxc7WidvDbkFQpyPHs42ceSVT8",
  "key7": "47Xj8D752emFSPWsDUBPfUrPcmDvmMaSa8ysT3VzUPddv9HjBodhqN9osZGaAbicp9FcQ5eMSmwknsbmhBurfYkQ",
  "key8": "2sFCqdPW6kuUpfctgf5TxKprNkWYbVckaBZymABumDdQxT4qpF1gRfDxWRXF57PEFt2nV5euYrhCBwofkTvL5oU2",
  "key9": "3HTj7M61jLraPMxry9vnx4j38u11VpRzqgyvMJRftAmQ7EC6iaamYK72NmFNkEc3tvAEd5XMRp7bnQJX7i2FMLMh",
  "key10": "4aYi6qM7mkprQ6DisSDwY55jNnQ3fXHL44BYLdkeUTXjUa2zqnALCouNraj24PWKqxvTKMuiRZ6HBra31eUpxbPz",
  "key11": "5u4od7RN6biuxUVEQJk6dG7ZrvUatgkBjEkHywTsESn1cMHqLG3dCJDFZagQqQ1tRZCRSLudJPYEDx4Nix5rUk94",
  "key12": "4hnw9C1qE23svErzMBLSQLHoxyEQdS63Ae6Jp3mZ1zk9MyK33e55qMfA1zBYeTAuWUnmip8kXcnk9BPTwChNCKnu",
  "key13": "59BzPjLzJa9f6xjRrqkQJwgLhNAD7FkVNG8TaxMU6V6cUmP6xXo9CJh4Nt1nAunLkk73WesJKHfUmwQsK9R9U4Rs",
  "key14": "65nyRyRVi8hWDzgjARRAyNJaUA6iJCLAHhqnTeHV1xemUjqH6nw8vmXoFCm5TAeFjHXudcxTDHZbzZqsf9VGKz3P",
  "key15": "4yu5dQkKAt2xRgtkV9HoqLvyAf6cmDVNUTnxvUY27HLCzU8gvW7SHo6wkYef4GqrcnAP5Cf5mSqQvambFRdJLKzu",
  "key16": "5Pyyd93jxTz8SBgmqXdoUZ8UxYfAF21GcVr9VynUaAye8iTHdPpYja3LaFWpEUY6CQDd7DdG8YvoexYjuMxo2n9Y",
  "key17": "5UWp4pqTSjTWNzm7oTeTJAKNdWJjo3aprDietPRTKziVZU7ZFxdZ5kLwjyXCwVwonD695DLZA9achZcTMtTDtAbC",
  "key18": "2dZ8D2QAPdjZwBifWXH5qNy2LvxSwTR1pZXoppiTFZbCXsTgJ8ny9xPYTZDDuwreee5QukdzotwbWR7awbP3XpJp",
  "key19": "4QvE8tngP3y6NLB7EmA6eG2BShtQDXTh9MD6SK9QdJ2iHccKadEUhGh4zXYudNQKZGyY7bz25ZBeBDL7DyBGrbAa",
  "key20": "2dd5cK99PqnJhQyoyjMMSK7PrvE4C3g8p7AkGSFiFzNFhNeNdzH7MK4q5paVjYUQXavAAAnqReXoZPLkYCCUBa8g",
  "key21": "5xswGUfKgMFQkqZC14PBxiNQKADV3x1LTmhZbKY258Rfm6hcizCRDp2Eh3aYUbQ9aU21XovZ35s7UYu4gSDff7mu",
  "key22": "5JpLMhMCLy2UtKn1uodyX42Xr3ZQbZ7uQCM6MEqRfVLRSSLoMpQPZgUTMkswUr7zJZVYw4fTrzrY5Kjp1gwdCxFq",
  "key23": "mZLcFo5S9DPBeqrR55bELCLRj9hYSKEy1EXR7zQAehgrtH1h5QjQ8V9iXPm4prGjCznsVUxahqt4rtbKVGvBqJk",
  "key24": "5zq8bsw8vx8Ph1nYEP2zcFzeAEBhC22NibtmYZidEAa44m6PK1CRj5qVSGDVs1icTBNeKbRHVNxeDtYz7hEg3Xcv",
  "key25": "4SpkjjNaV5QsntvM58ioqkCroQwFALZbuwdSFnAjB2oamRavcT48PVvjgZfSStUhVqG4EthXbeAdasgZE5uj62Yz",
  "key26": "3U7UYAFnYBngGs7eocaBPzBaE7vTFZXNjLeKHo1cy4dzUBBftZesYcUadzm4Q2s6mvt2kbbc8rAJsiJcBY89dBgv",
  "key27": "5Cc8Ua8MemjqbUCUJyVECMAiBTyEiybDgySMRD3hDn1DmgKuABGcXRUSVqyoSKQaJDFoCGxv9ip9BqfpGGHizjc6",
  "key28": "4N112U24N4Ciid6gdxmeAeTzFWWjX6dCAXuFvqJ4e7yGfaUExWamcE5SYv4inBuwysHKSJpYb3GpzJPBaaDyZuq8"
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
