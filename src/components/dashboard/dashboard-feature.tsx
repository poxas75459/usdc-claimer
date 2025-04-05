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
    "5ok8CH2Eh1pwmVZviyLCSEyJxhvcjS8R2kHb5yr5uE3EMCzc1TZbaLxprnV6AKhHwGzh89jB8dRimVVGneeDsHqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FEqhWojSgSG2YdqJ97mj9T4FWcFnghxdq4r5QihXbopBkcfMXoAhUsD6WtSkwe9nSx6pcX3wYemUp9D6LoQrGZ",
  "key1": "5sN4HRMPBFdtq8oepov9k7rH89khtsW5yMRcxvqy81vG9Eh1oCQpNy9oXvybBdCGNyfAgwyxQ1UaTh9iStGKFd5Y",
  "key2": "3BSJdc1vvXkteLtPDhSxoQVNZq6ES9esV2BcQXh5c4LgnnJeDBF7gFX91ELKNatQW9qZ3TBt1fhDsoaMTXMx2PBv",
  "key3": "DRWJs3t4sJCVtrAeJiLDAP81rkXpVkfTnroioW19YVAc7RLJGGwWWXwMmz7SheURVXsXw1fQzo16za6zaW2H3HG",
  "key4": "2ggEYWrQEF5XE1GDKnKGLf1gt9GiHfNZfNzPrWDFm78X4zDD8Dj1FYRQeauDuX3BEeXoJmduMs18h2cTwhcJejb3",
  "key5": "64WBN3kXgRPQBcHawFDNnNobuoQYwtardFHcaKjvc7LBUMA5DNzrivjkMS7SuFB8DUMvkGfDRQvQjwgvcK1LNNTr",
  "key6": "3pxtp1dQvD2dDcKoafgbFEknRggFQDNwPGfyztgrq9xrn8Y9SEGahnjCd48vmAFYqEQAejdsvSiH34xJy6gwocGt",
  "key7": "4iQRWomgYtxx7cVagxpgG7aDV8zWtHNji6H3ucv2otegTFXwnyDT5JuvNKYBgna7XRS52dffbm7ZvRdkyGZ3vTTS",
  "key8": "48Gx7GdLie1PrxdmMYvsQNZWMQgWcqTkCVtUCULdYxb8fpEf9Q8TPnLeepLyjTeFi26s9iDsWVz9cVC7fb9kumdk",
  "key9": "63QBHusxoWx2njkgguiVbgJddRQyoXxNq5mNMZ9vATRno3yAfYprBuAoZgn9uPMvEqie4pzF4wGspzKYSZGZzKTH",
  "key10": "3CzHwRgVXyfVfpVLjoeGextKJku4mUKMDEJXKC3P1fah7ZhADMdcVPQE1DbxNGEaYeFSKK53GymqHYVVaoedisJb",
  "key11": "3wYFDVJzzRmSyJ5pP3D11L5jkLfcrtdwYF6EYszkVCkh83gWBG9ntdsGGbEkT4Y721G5ZFEHFxR7evRKR1cmUS8m",
  "key12": "29oRM497B5VeE84R11NS4LP7JQg3oYnTU2GyteJDsqmXqVm1Pt1bTLYPaz8dxbbuaBhQgYX2E2uA79XybwFvbhRC",
  "key13": "3dg8t1VDNghZi75G9PeFCSrUMoXJY6q8uMXQbmYg9iQFHn8HFKsj6iW8DjpEn6wSAQYeH2KryCZNMp4D1zxyKnQK",
  "key14": "48RQf8gxBi6NJMKyELV3Vw8eVKu7mPfuu4CTPNY485vBFxEpx2GPvJVQSWg65MuxRkBUjimX2Bhkoa131w4hWtvy",
  "key15": "2m7PBRFRN55JiNmiYyPEyzsZAA2TvqRKEW5AjbCG2X6qYwV9kJBw3UF1mpGMZ3weS2wqwVHjv4uz7LLZf6HpWVaw",
  "key16": "4yDxiFhQEt2F75g3h6bzdmkwu5NgzPNt5yrGuheYdUPLJ5V1o45iDW1sQMfvvTLuL8PHsLmq4aDGaTMsrWeLApHj",
  "key17": "4y57WdvQcFYV9VuJGGzuBcioBwhBrZpoJXL3S8RWV47dVGyHiv2PCjW7kQE9rsxcewc1bk2ZRjbtF3zsFKZxoBVV",
  "key18": "4cVnHdeR4TAadm5V26Vk4DFYkaGDqPS49y5f7sYtSck9n1NS3Gd2cBw7dcNKTsukfrRjApxX2DGRAJiFwGb2Dsmj",
  "key19": "Tbmc71yK161k9EsHjuRqQ7YwxGLGJN9gC3CnhgzoZ6PRDJyJhn2opc5SEFLHdiQ5jk5n4riZ1KmQurC4aJEfKbQ",
  "key20": "44SvG8px122Q45b7MHTh88ekiHCKshhN1PmWQQ7bLgHGubWT4CE1ksCSGFQKfWC2g34vrF1YLRXQpA1UQ2CJtzEh",
  "key21": "3nyu8MwV9vPksZYJWyCZUbtARz2fsjiExQxhsqWFAuEdyFfAjXaSbN8p5J8niqvZA8soYQrZupcDitkt1ppEhW7z",
  "key22": "255jmTNfM94fdeQprmo681DXkKNtu7tcjZ39f2BpFM892coX1DYCPywfiKXeckYNVMffy6d4HSUPbxHEKdBR7gYp",
  "key23": "2AS3h7TVJHuxyWNPHL77CAZtMsWS9xRhbrLLFR8ogB8a9kC7Ek8fP9tevZF1eNULKXegxrndZP4TFRKJFRgFzdaj",
  "key24": "4jVLbhus9bszKNH34cto5vbErzSvkSgV7MQanjxA3gLFN7125wWaav8ur3anhpzLRYi22Y13x9LeGRx2Nbc4qgEH",
  "key25": "3vSe3Gm4EM1GFtN23L5hVcDrR4wSy1wQuiLRKkuqXYFzUdd7FWzLazADnqyvnsEdxC6jd3GFCG34gmF3upuoMciA",
  "key26": "31mZYpUsJYkwPfby2qBCDFStrrZxzvViTZSKTngkaK5WVrLf9ZW5k1EaohuRs7ymkZcbGnRpGEvcBwADujzwvA7V",
  "key27": "4HhKPnwdmAZvZGTfiYVgcy9Yh4t1L8436K8frAcYXDmfrKz9jU3sY2SGHygkazHtMZVzPmsFGrTxqv28mF6GP1VB",
  "key28": "3tyNgUEc8h6S1MPMfNirZmjqs9RcUtJ7ZSfAkc6bpYicaDF7vxufpiaZNpqnfwMZPS6YBMHYDPrDBwPqTWvNaoUP"
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
