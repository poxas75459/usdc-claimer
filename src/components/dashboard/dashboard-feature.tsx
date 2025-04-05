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
    "33DNNA7kqR2A3Pc2R4MRK1bkmCnVjXFSRvZTwQTPc8xfqhVu1epM7sugx6HxNjJFXFRHTMYmBuJBS3eLDoePfx7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGpEkEHQej5jMBTmEQFyeKWoWmoqdFY5MzynZ1hz16wM92MrzKGNydqsa2Fra3h36iDNp1QvYB4Mu4KHPTTrgYF",
  "key1": "5xscACiLjMEDLmP5mpTzP8yoRBxnCeHvpcDY1ifhJja7mhs6bQaaB9S43ceFNTXoA14P9mpphkBSsT1mjMJnRj8x",
  "key2": "fUfvKPurje4WU3Gmsd9NvtpbopsXEVGPaVjC7Ru1pWA9xbBDhq2WQbSLb2qFbRcGNub8cZK22xjrkYAsgnc85Yo",
  "key3": "i1RaHs9UsbywVb6bXdPB8NoYkJiEYeyDQW35dcDEwCw7xadqeUsgDxfs4Y8FtKU7Q3H922FJmsXNtDxTBic2KSQ",
  "key4": "5364EFE6dhCqUbivxj1BqZTK3PA7fcxFoFCwL5gUtEJdJMDxfoigSsfrH5LGgfCkPa74tprrs4n16RspiGJfPReo",
  "key5": "3QMWY8mys7RpY9rYcDgkXAbLDzwfsnPZqNGz1fXXLxn1Yahs3X6Hou3iCfiQSkY1GTtTyt54QWonWdmGvDgoritr",
  "key6": "5fJqKCGcjX181YeELFibmE5eeMBa8uAHXDe9J1CD16QxFoGmmT5ChceuKdTjx5g5XJxj1FwD9ZLXCyzs29TdBVeR",
  "key7": "3bqZ13G7SgTknqfUuP9Yf2t3BkGznrF4HL6cMajyJVzxxRnaKR1WUBb2ko4uzcKrHkDB331kmKZqErutAwuiBGf5",
  "key8": "3GaNwyNevAwZKfrrG5VCwL19bNxM5LhxmifTzmFrLuUZiaDhnWxZa4R3T16fPFdQNyzSwGCTjDiMBP7HdkyxDDXL",
  "key9": "3B3QPwV6tLr4rFc8tk5RuA7pbWRSw7syS6zpRkjS7pT8tw4LDDiWfyJ2GhbFYZAqd2zzoHtFGrZd1b9Z2A5cQkrS",
  "key10": "PKNGt8d1g7WnLLRuU7fKjwPY69Q9FER5dzWCW6iqSoa1XefiRZqTNkuCEsuWLHhLxzQY2DMH6xJT5imGCoNdfRd",
  "key11": "3ziFhkRtatTXDUjJuK8tEQpuCmSwcAQ4SXAoqW1ZMgY16fxhKYtTRt3o9Y6svutXfB3rxSGehdiykardCuMwXaJM",
  "key12": "3ABvPofCCTMdgdpLULRXPdQhBh4WVNJBt6DvyUeu67s1jWaLpMHBgTE85qFX86Ktdz8hwYv4Lmkj29sqMciTrRLP",
  "key13": "2JMyqgdQQLdncrbmH3w18qY6vwD2vjMRaQE8bTqRJeAPqMFQYeMJLqDiajBbjdhtpbuKejC1V1XXVe9th86YsLnA",
  "key14": "5uEcLg57FfDtVLp7HyBof2uQDXbwwLEycmfejCYctS1HJPXjxJhmFWC4WgJG7v8zNE63KdQnJZFiytF1RDjyR9m4",
  "key15": "4rAihWrcCRDHR7QA1vuSMfw56cAL7zga4BMBi68fkvKuh6gDxPNGHWBiKedH7WDsNebEwy7moh4G6NjPVWGPpVSB",
  "key16": "4W3eE1KcdtQmhxiU3iVXeeKUbeWxacww7oB9gas7XvCgXJjb4zx5TBEv4AQm9HRsL7kBHiD5vKnSD7wdXmDQ5xvM",
  "key17": "2FW4dF2G8UrH76gNp9MY4zy9QXsT6Ga4t3ECvLEeWgDFNYoFMmYXyg5FS83E297nhSSeWrJqwJKVSN9CfqAv5JfH",
  "key18": "3y3oy6QQ2NxjfotbnxKsAjzKxvgaNDq3S9BzeUYV7TvkEyY84qZFqi2c9KhvuZaP4UpfJLU5fzzdhC86Zkcx5CcK",
  "key19": "3CVDNRFFkBACTxZgMdqCtuFtZ7QUV4jAxcBPumrXi3GEjkDfM3jd2CKSHmDucnK9ZcRsHZutBaqf51aAPcEq1wo1",
  "key20": "2B5rM3dm2YxK8a5p5KFXE5EX9PThQzzmmFJRqmgJS1brGKMzP8s64qKjqM2sNW8teGNGLhGKMAEzCDsbwXEzyMRp",
  "key21": "45CWwCmHVgCDfg8kcns51J1tZmn1C8MvH2MMYjUQvdia1GZkaxkkanPEzVLBzhJkxqUTiVwrjzu3s6H6RqZmHHgZ",
  "key22": "4r9AYEiihELhwzMSrCXGKZeoHcgt5VXFRX2jhEMZVZX4z78FM1FEJnwVXFdFuKbvYFxN1uX8YQnsAtCBGDokbebb",
  "key23": "2CFm8nSsVPML5F9DeZDvDEmsHtHSbcgUadfvyg34xYAmfebyhGzqzSDQPng6wq6SmpzsNyWmVdAw6trYu6wMAd5P",
  "key24": "444zCbzrr3GaGt3mMxvraEEn7Tqrghimbto6EFVH3SakPD994Z6vUDM1EeNjzUCBPTha3JG76vdSnTaUYDqF2yyj",
  "key25": "3ykVCx5p2SCYTpWUFgbZg3QfU8ek6WZnBhsrjEyKAh1ecbSKMd6LBJaiaXPGbja16X8fu7E4Jcowtx1m1mU9Vg6H",
  "key26": "2idPUATfFTPunvBF2m9Wr8TMQWYr1GxH8Cz5232jJvkPkPMPyoaxfk1QD7i4FNMk2iQdm645x8z7DMN9Y9Z7Qn3Y",
  "key27": "4hNf7ZYyTYeBNoP1qzSWhPraWJFLLP6kXTk9dByeiEJ2VFBRAQGzVzUM8i8S9jgCw2yEDZeoY3ZbPgJ3eJc5U7K1",
  "key28": "4T2LgTVbjJ9eEemFXDVTS5BPDqCNG9ZV8GWhxefgdLa2xSzrdHLRQkFLpVfz1CKTxjBwdTNw22ZPaYeEx7TnmMqJ",
  "key29": "1koogZMeUZi9Vc8ist9JMJ8EsXvT5ZCf12gqVpgGNXwG2M5N26DPbieBn9r6pihDKBST3wktHNDjr83tmzBBXQD",
  "key30": "4pYyBfbxEy1kssRU6VxoXK4awczgaMQRahhCRjthcr3JMDsVXtJeksLzaCCVpQp6vhGZkgbRW2eUrP8bwNcm7fs8",
  "key31": "RVMoVyuVw99hekmQ3Tt8GNyoNvJuBRcb1n9U2XLu1ibZtbehRBFMN7HUfRy94bL4mzkgSDybp7NhjmAgnHeHKsc",
  "key32": "33QRtM1EvvRokj1hEvw31cYsVZsKk8Xq9Qwa7Mbyseu1BuvxsR3cBVF1Yu21BGzvn8yhbG5ScMAQr2ZcQ6pkYLC1",
  "key33": "3DSSQCdrxjNDkGQCNX737L7zWto2QSAWUBFmvxaX4Uav47Re8aqn4y1uFvQ5BtkX1TQhTVhbtENvQ9N3nXgwzCgK",
  "key34": "5F4gYqmm2mbqMzfvKWhUbivSQSXwk3jkFjv3arwW21Rg2gPh1ppMMiu4mFjo5nPoMQK5nPfAGn7f9K754SkxC9wn",
  "key35": "b2YCuT539o5mKAfVFj5XkaxY2UnE9eoJxU31FAge1XvDutQBTyrJjHyH2YRjf9tJz5KK8rLJQu4gFGuUUJ6oxKE",
  "key36": "3zyVxWxmBnuh3b7mbcb2wgnCqYfJAErQbNSFxMJi9QqbTGJVeFXrzR4QabenwEbKjR7oUGu9pkwdyZtnWgfsqp65",
  "key37": "4a2NeDF1fyZQzFdQ39qWmrhbks8kEvQqEHyXPNdHVtaWforKYk5bpmRWom8tLkeR5ECADwdi2KG7rgjSYFtaAjRu",
  "key38": "4tryKfrgs9Uw4r7VZQCiNCxhwxttJ8zH9RgjtDvmHAMv13AXrVzyygKVi5EDK7jGecPk39mEgJ4PMj2owHyxBb25",
  "key39": "VsQupGYtM7W43R5AWWAWo4zfRm56j1C95ZHnEcSc4dT64MdXvhrmyiRJa1tCu56D4LaaUvT35G1jSRhCXFbXp32",
  "key40": "3T3p4sWXoUQgkisbKdAfongEoaehMwC6ZmHdCqewSDFM1k25akoAZE3LwwnYL9SdqV5PSnzTgNFDbteVjtZ2W4pz",
  "key41": "2Z3p6RrWRyjdjqeN13RuJYZRwrX4mFKV7kV8yQDbk5FK1aD57eepWmZgjz7SbTJRobSPNApnzpgD1MBowFM3S4hU",
  "key42": "4sqHXwV2fUo3aZCv4a1phfgnH7SpT8dRQNV3eaUzFajC3aGdbSyCggSsfcFGWEHeuwHLUPZ5NZRXaCF5cRJer6rD",
  "key43": "4S6hqDUudTajk1VDtTiHQGwRuy8tPFcSUz9Ft5Xq2yMTaoEPs7Wk95ELAFoBgR3za3s93gfZSzpiz6u8pEMeKfAv",
  "key44": "2AnNhWxca2b8n2RooMkm9CyJbMxS3meD74XZ9t2kz3kbNE52cCwTtNghw6DzsLgZvvsypvJnA4W4A36gb6uX9HSF",
  "key45": "4zzRE5KGAJX8iLFgdMTKTpY8kGN9qBH7zuRs8x55j9oPLSBWY8aPqBB5kwxFXD4SkiDqBD2AAP1npwT46ZZwhh4Z"
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
