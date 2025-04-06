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
    "2akV1MwSbgE8xrVTrS8TWbo5hmCLieEgaiDPg5tsMESen5qFY6vornX3cg4UCX5DHW6q3exxnGsERD4UWh2N1Dz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FoiH9wKH8SCyuSDeFhr28LyWe17xJRVMzVrhDGX29iUyJbq7vmh4ExkKpnzHn9gTcs4VrhXbyNm2kw9NnzbGzU9",
  "key1": "5Aa51ZD81y6rs1xn2suHUEZCFx999zRYn8hhSxCXchnMuuxpCxyYA3497iCACi3VfU2pjc1ydcx4jV4fv7btYrhX",
  "key2": "38dJ3pME2aJCYRPACR7dwhVHZx6NBPJBUEq9hPJfjRMFXCG9b4VCX7aqDc9URMS8atPtbPGjFbho5KDS7ZFphCCb",
  "key3": "5nwjtBhUNUdeKPYhKn89AfVnRwznwYHcUJ1z3NacuKUzCaorzBQw1HzsGjDct7QxbknPPSRrqng37fn9xgPsybKp",
  "key4": "4NTNuoVxW2dWLskNRchi4YHJpK8Pq3UV4hSngbbTXTJrWzTdiiBf1jRet3784LBSmitx4Tmc9KktCgHaMrbD1bgx",
  "key5": "38SemCCvuUn7J65xcyuUC2wRGZLyaNzHnweTa9JDWYfGsCqLWaZin7QwW9SgbML4wqssW2TsVomjCErNuj8KiSGa",
  "key6": "3vB9JQ6oBag2LyUzoy4BEvKT2igMGLYhEcqC5i3B4RjUsBgDFi2MG85YksAS7rWk77aMKhvdHGLDkFeJgdJ41d9Y",
  "key7": "3fVic1wrQPHNUSaSwvKiKhVDixryybPF7aHQ6jn1qGyUja6YG3TNsHVWz9zHPXuX4caqnHGhwZuwKJbH95DtQRj4",
  "key8": "2bwAJBSpEPnewK4dvVp5bjxxqChP1zMpVwGwt1MD93N4nxx75oEYdxoay4fKxok7Uapicoyigo2tkSGeosqv1fWS",
  "key9": "2WBmrSPU2CEjTRhwm6LeWh7xWiLJiBFvtHCh5pE1texV7T7b7saCCqaf4ar9v8NSsucS3c1LTniJX2qVSUbx5RwC",
  "key10": "fc4Nf5h5cmYWMZornbfamDqEGxLYgnvph9CkMoomqsAoVdTnuicRYKvYBxsfNhXN7oEouW3ANpjNMvc1oUDaX4W",
  "key11": "4njCLEUztyTEVKkHzjb1zs7oryuTkZRsVx6WVivJe12Qs6anPYZF12rkxsE5JUXm3nZ9FYSmUH4QUzLSb63scYJQ",
  "key12": "2oV918PtB22EkJvpcTiTmQB2mzjP6jR9m3jYqPDZ5C5eGrWHhWixHShwabVzKt75ftgPjB9w2nNpzNAvb6wJQn47",
  "key13": "uALLNXHL1CJNP38z1J6zhjp56iKHnN5akfYuSiA9xsxGarLANy7Abu9UCA3zjsb2hkJmQ7ew5zPcAwCoEvAfhgx",
  "key14": "3gtFkaxVyZ3dNWnyn5msNvC5kEaY4ZGs6LdzXNgDjJ99XbZj11Rpp3Pw7LAquep3QixzcPrz25ptaEiujAKq7pLJ",
  "key15": "2tyVD8oZ6bfgstZqxvY9Enpjykmgv8NeX69LgSo2Nvqad1hqPH9EuFgPUUKQtwPGGAbczuDngb3dzJeh6dWNrvtm",
  "key16": "2GEXjNEERPiofgmyFUbaHkWJivcqXFxgbH6ivwZBtG5SK8h9kkdPf4LM7PSxXbaYebvVhgtvZuGJGxt8xFFbiCWt",
  "key17": "473cDEvr77Ffrub3hxrLS1CusV6i4EvxFNZwTLFJ7C1gnTCZmEFZsaJQBKrUm2GhzeLxmma2k1RHJcNhYiTD27z",
  "key18": "4f8yB7b1G3EMrG9XXe9m9KzDcXFKs65i964YAV7PsJ4Ki49mhnkTtEMmyL92TKfrdErBp6ijbLT2CARDqePU2uGg",
  "key19": "3XEKN8PbvmbkKsyrC9FzzwUmejbQvH2PaA8H8CAAfkArGVhLzhMQL4ccMFo9Wn3a56W4vnpZJWbbZtnJ69Zm8Vip",
  "key20": "3Bw2A7AHMsrXHq1H3TchqYXdz4ioCuTSuyJnif4f3yh4hrimepgWkHGuKt4uur41EsG75wVco4Ue3giNpY3wLxGF",
  "key21": "mQs1dDjdLnKBPGyUc8PZyNQDKzvHfzRq6PVNoWWaMikpqGsuoSGw61HHq3K8L9hnmyWgyH6vZQ1TZ1WYuB7HQv5",
  "key22": "573XGbiazmCQRn3uACzeG4bkgiZ2ciX9Z5TbkEB61QUB2htkj7khKntNm1G69riNA1Nqw7CjHVcEXMm3sK4SmfZC",
  "key23": "48mMdV58DBCdxCzvogb4oYUwjySousApi1bJaJkHd7sNDg69aHLNzPQkRa86GvoWUJEn7BSzbUTPcZdtYujqH4dT",
  "key24": "3gqW8nVQ3gu6L4fBL8TwkiRRVnJFRuzhZd5AgFnh9A9m6D2xCtsBgs5qV7DzS6RKZuD1nhrFGqhSTHW1YDHAEFWA",
  "key25": "3bm9e51oXmbdy7zJvytmndCHd9z6cvwaUnzLja1LhJ2wKa4ykckk57G4TMKNY8ytwwbTkECQj8w8uR15DefURsKC",
  "key26": "2BiX8hLszAfrRhnaUXMCB4gfeywkJdhBbWRa5U9LHmViXnKGMR2VcuAPBR7cuzTMfgFws6iYAD9RYCMoGK9yAoqG",
  "key27": "4GJRiE5mNqzGtqEa8zQPBvWa5mcxNjnEgm62D8FQBvqzueTiuww7DGZAawA5a3DndVprPrsMLAQAsbCjKZR5horf",
  "key28": "5bfewc6PSwAwWP8mv9RZcA38KspTyjyFzWfZhdfw4tNfeTyC1jyQDEd1iNYprNdri4b4CLhPYw7RHmgkuEoGCCQq"
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
