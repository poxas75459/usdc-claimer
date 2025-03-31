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
    "3ikrEYpkERpXB6NX1SPTkZDkxHYQqCU444YsW9X4z9hQGYeCVNLFEBKG5YyeCNCZmMBTr2vDqoifph4GAnuMoAgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22EypwPqkYr4Th1ezXHY82By7fwoFnSczoDKEzczLh8c62F5Wx4XascEzs9EKUyp9yAQeaU8LBki2P3rMr334C3J",
  "key1": "5CpTVHzpvtGtnSnUnp5v947dCFwsZxNrLXgS1yiuuioVXkifM13UXpoEhhgvnQ87hbTeenoGHEnymL4rm7WdAYtL",
  "key2": "2b3cncQejGQvBSYKW2mzWzRjeqoZeJMe1CasZ4YkcNcyYha6VBwrYvPjDcHsq29awrSuZHZS7bdGhBy5i59JarE6",
  "key3": "4abJo49hMjVgDr3wxaUEMyTVEHjLstHGrETTQmvvf13iawyZDH94E82beKEdwABypUe1aL6RdNYrCvP1u1wE5JfY",
  "key4": "2HNQhAfis6udmmdkoG2ywZZv9ssJc9DN7mDKJ2YQtAGkcdMQ8YWKGoEMnZkBsnMmX7t6ZuKTc9MefN6wk3smn4AQ",
  "key5": "1kzaQ1BVGGu5awhJu6iZjdQP8uK63YuSs8KsphiEeRY5DgZ6RoELEfRWN1DA5BErw9CDaE4sv1heBK93gtAWPuF",
  "key6": "57TYinH2PtiHTdzzopxDSzE4uj7VbZxPF6h6Uc9h2QLi1LkRmPNLyxQ3zW6qH77Q5pgvq7AMxiCurcfVnniNhnTw",
  "key7": "5zVD6ER5wvLSF1SKcLryC1ThwriZBt9aKKp37ruhGxU25VQP6FpGJf7kGe8CApq5kN5yjrtciPMLSWrDCGwS9VLU",
  "key8": "5aSaP3JD4N6vAitb4offCz3Rmu9iLLTXG47WJaZmwKjAqQFS2fBwnpTviMYJadoZQXknzQcNK5wa62HdgNYjDin2",
  "key9": "627FGwJf3iozmjcAL9DoAhRh9kNUujmVnjpZvSmbeo5HLXfXDAjcMa4Di4iCJyrXmecyGsuBeF4vT1Xe9TPTwDLC",
  "key10": "5rtimPxp1HwRhqegSAawgoqHUnMDEPrdWdj3TcvnLgW8eTGDMK52cBc4ZkKDGryb2D8jeSPapFt4RsGHEQnsKjM8",
  "key11": "5iPWrnN9FukpGJTqRE6F6LJHqbFQaNFYvURJ5ANZZ4UDF8fXpwrMMPUBXt4sR5We16Bcqm7LCqpGWLkxio6oMWBL",
  "key12": "3XaVQ2RqKYZvLxp89MLmzoaum8xJaz6h3vQumXdpb8WSHQVYLQxwUc8c8VxzUvJfWkgBprifz8VUrXmA4UgpapuG",
  "key13": "2tBLDvidZc7VxHEcKm5BvD4gjYuiqs47myGXzXUmfNAUj1chgihgi5nPx43uNRXCqtSK7dPEev1yknJ2n3BsExhn",
  "key14": "5fQZj2fTxyxrFSKSBaSkUKrjihtF6hVo6QZ6A8emzxAgqkZdV7gCs2sW5jpjY72czAhLPmi8sCFVvumSWAgGG4bg",
  "key15": "VYkWr1feoAYSpq9QVw4jip3T7tkY2jzgXf2gPXJsZpCqZZJ3vxcL9NYi9uc5qbom3Rp3raDDWi7S5zRRippCuGB",
  "key16": "55uq1Go7HDbG1Lt4isu4DG4z45ucUzPvmbk5zJDXNM4UxtRAhExyTDj5LTDyZbD7Z5e2Qx5QvCgZATfKFDrL5nsR",
  "key17": "3dsRr8HEgptPgKhU4t9u6RxWtpu5iAH53WUpz2eSPvGvKEqpfjqctuknEdL9Jg5Cq9U2NhAyGUtZ8G8U1jGrwfHn",
  "key18": "5HGSSycMsEWhVUeuPgJrFXxCdnN81NM1um1KHYNxT2EHuLEey8XP3vWbGv4XuPRjnndDM8sRXvLxg3WfDy8qC5PV",
  "key19": "3FfF6AHRpUd8qapfiDDW7V89tqm9GqkQwsKjsYW9G3wqFTWpqSMwGjnUb2vczcuJpgT1Ayk9PpopWH3KiRUavLZf",
  "key20": "3PWmfD1oFhVgERBQMtsw5hAk7Vc81Czrd3enYdFbBws25rt6o1E9sc3HSRxMhhJkptwppW2sbWZvZGZE48fWDGrQ",
  "key21": "4AFiMEgTFFt92CKEJYTDcNvg1yzRvbLpNjjX3mkwT7V6mHmTbwnXXFUiHJLVrqJ7JfF15CrSZJY1q791rgTDFfNP",
  "key22": "Dv2tmkD2tGTDQdcoLe6PvzAFAB1MzqRHQTrnr2yQkh19siK2SurZRxWtHvcLjYLRdsJNFFM3aaDgB8DHcLs6pEH",
  "key23": "5aZ42KgWK24ydFq89t51k11e1C8V1S35DBfTdsqwi1kK9hb1zPMQMKommQvCjuPHaSufkLGCu6L5kSHzfdemfGsN",
  "key24": "3bSowv2VaBNktikL3hCgMtFVwpDRzSXRh5RiDgV2FjFHkNQnpfMF6uubuCEqwmqxT6XF4QtsgWnrkVMNkcTeGvtY",
  "key25": "64i4BNPu5Vj9eyDccSHL4K2STJTP5cnUHKAWugZjbDr6Wb25RDLwqnNwdboM8uZmqsZncUknfxWfH7V3iDUpsHSx",
  "key26": "4fn1Agbz1fPA1JFHzLSRWfF8C5TW6FMfTn57tBoWC1BcLfo1DTT5XspbxU19Tq7b47gXDafRmyV73LZMbwxEUzQc",
  "key27": "P9DWSmMRRM43jKQhsMFm5D6xJwXsCduWJg71BF1uRBj7E3akCGb3rCYrx8Vukk8zyFUVW5ZNQMYovUPtEi7dv8x",
  "key28": "62x9JyE1Z2HdjY1iybmRkmRsj9kJz7bweumZdJndMa68PHERoMnLJ8aW7VHw49PP4DBfsJgv1tUMGrUwPcoPptCk",
  "key29": "5YWqEjevGDiAhojbxE6VZyyXVF5xbh5SGkUN8iHQTgj3M8JAqd4mdcnpNfkWyY74P8SpJWx4B7fkeePnCuqkTa8",
  "key30": "4y6jJ3BWURd5gURK118QfNop6k9ZLKLdXazoaMNobndHM9Sh62etAEh11PWEWurtHu6ufBzZcHLGPEVf6m8Mj87X",
  "key31": "2CAZycrN3YrwZ9wTEEUMc3N47p3QcfvXRbMoa2Ua2zrrSosQB8eDKBdWSVTxv9qrtiei4JVYLaXT5b4FyNetwA1y",
  "key32": "3TLQDEfvWSBF2JpknZWr43gdJ197eSz3KnQj8wsTEc8YPCHcAwgKfdGeHr22MFid94LHupGwrJ88ciQco4zBrxAe",
  "key33": "NqeiDr2wj9MuKPTnAFPJ6htp8Tayq4KZE2n1RARRJzP6S53MfooVFQ4rjjgzS9rULWsZbiUFf74hCKan4DUcVbm"
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
