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
    "XNNLVZuoWX9zFN6YW81ynd54KmGEkVqY4Rq9y28wgxHiyNxuAaSSnY9g2Ph18ZWvk6ok35KGBjQnLbufU27r55J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzdqhgK3pfwJxvgyMpuhrbxQmjBarJXAqZr8HEMsp6ZJyFCC7Me7ooZLuo34uQhLfq5TetaQkM1GrfDjQtPSfw8",
  "key1": "JARW7Bp9ZPzoDBjE146DAxwzUGHAptNLdR2g2zw6RhxrzhqfQjjspfdHSJymWygTsQuxZSLB4LA7Fx3Y3ufRDxB",
  "key2": "5wbxpeo2VFxo6vYerSfLhpN55TxufvWDMdEoa3jm4ae81LBXMzjAsHnoWDrgPUVXecUQwjcQUvaijsEte2CEe9K7",
  "key3": "2W3g8NnJiqf9iMuUJ7yhb9Lzy6av5azw4VXhQp3hhFiPZ9r4nWs933nQqJGfco4uQ3BrBdHMNguofTmzcie131fo",
  "key4": "5pjTBqFgXdePzQTDS72mHKs4g1U8wkHQMjKTMtx58ib1TSk3SsyMasKfmdrNwQMjSUXkfCer7dtCDVVh1qvUT2WD",
  "key5": "2VYnXrJ9MwFjuLQu2Pn5xkyRKJZWnUCuwEvrCpCHrhH8Rfe1iUpk3oke2Rr6Tr1vAEVn1uWNbcACeX1qCXxwb1Cd",
  "key6": "2kwSHJf2dpHh5puv4dxBP64fyWHinJ1TB4vKmioxwqY218VvhPwc2NhLYwFqdwaE3zaZkgVBjTzqZF2W7iDJDwqW",
  "key7": "5imA62rVvtp7DyLJMJh4u2sRUURJMi7UFaHEZ66Vpmj1UahDKn1hLzcE8VMdRFfmesq3JigXppTHBx3BJ1xvw6pn",
  "key8": "2wM5DJuBR8oyDooMFcU4GXQkqVs47EHc6gpSfwi5waSuHRCKFoo68kBouMUsC3Qnev85RZ4AX5oUBKUWei4ayTfr",
  "key9": "5GdVWkUHaCxBPjS4jY5jqjWaZSMHXL1NkBGL8SqKqXYCU9Z5J5sdaPTiFLFFg9Y8aBFkUwYnEYPuqAH4L2j52PNM",
  "key10": "3hej1zwAyzvW6sH8rPDwAFAhPPBuNAVmo8t6Vxy19cos9k4onzDbaMXaziYVY6cth748ZATg6f4rGhUi6CfxRgX",
  "key11": "3RoAPurLqdzwWZabUJR7jPbfmosZqRmAc8q28Woq6FS7cCuFboDAMDptez2bee97NfKb2oJdvenzCrxp95K1oxh4",
  "key12": "5BJAXoEFVg8fmSbvWrXq59N29zDFT9gBpnXCnCRbekGgWpYeSP95aKbEFHxoBb43F12GpZ2Y7CeFFfZzPtTdXpDH",
  "key13": "TdDyjNuAJfXDz4CGjYJpWgwA6gwbsUevi49ok8SJSpAgCvWo4EAuwH3sBPB2DSPKJ6oEwru8G6kG1SnJua9jpCD",
  "key14": "yvQEFPYaGYVUccaU89GWrXsEtGRVtx4Fia2SgSpC8x9AEVzfporBfg3JhigBk9mzewoV7yh4HdcJqQNYD8GkUpB",
  "key15": "5jeEMSA2yemaggnik1gwqBoNp1yXJw2cD7BQuUHbxq6maVpCWatXPQ6n8xYyP25XtNwVyH2ySyNoeZdf5wZDcvPF",
  "key16": "5dEGQ44eoTtL1Fo7zdk6KVhHCRW3m4iq8LemfKeRsJ6JcurbwBSq3uchGNxr6xAR86m12J396oRo9ZWxH2qyd7RG",
  "key17": "6vgyUc8sRSeacReZxehTdPU6eZdYWbH1BJF7wXchUr7EqfjT1QEh9pN7gETkdcfNjqsydEKgdRbbRYaApveDcRt",
  "key18": "2oV4LjkAME6GromKp9Mu6T2chBKqcUP8AEW8apSzqKpK4SMc8hYdZtZFcaxcH4PTbQdcQ1bKr8cmRgvG6WhijrYu",
  "key19": "5rFzQZFk7SLeiRqSYbuTMXkvKQ8mYgNTqZoUNjjPx3YAb1mupsCxvCD4ZmKb4qRAKKBguTRvGmNz6YWdPf4ZasND",
  "key20": "24Ra8KTMynnmcACX8VaJWgXbJaFPgvuAqJujm16AXNQCHHP3h7LnHWiffcKmv9ufmExWbqbPfoEnxXAcwXazCUHD",
  "key21": "4ZNmsmQpVLpXsGMvaRPK6RdkKGTCjmBAdnQzY1stXskbZHTJsgs36YSuVwzfmekf4nCUoWTFFFg22vNfNTCLBRRt",
  "key22": "51X6NYzAqepLBtoev4WMjfzbpCKR87BTdaNUQ372H56DMQTnnNFHiFpbienEbRVN3EqouAZC72Y6HY7gA6cA6H6z",
  "key23": "3x7QuR5Bjq9ZSGRKy8PEDKebZBe7hkjgJH8DyFXqiF4MAW9bGgk2WaUMApofPZ1Qm6RotPGiuvoM3eQ2k6NQozhD",
  "key24": "5sjrnWNUnPr4TC2KEsGGywzMj1cPqBeDkwtQ89f9A7xci93GatUHSbHU9ZkkBhxqd5U4UUvZvHNPHyxGgYxZqZV3",
  "key25": "3ka2d5vFET3KvLkEXzX6Zgg5v4zSZHsDFfx4kKxWYoTonL9zBxrPyQ1VBs1LbcJTQaFEg8ufBtjxRGCAUSxdtKMm",
  "key26": "2a3GSvUVTB98xpddEs3ZbG54VUzrBpPzKpkxX4vbecr3vmyVfPDnTc3rW1CNC3WwNvsav8F7TyUZC4WbtZ6dHJSK",
  "key27": "3YvffEbyfxaYUZE4uQkuwmcD4HncmNYcAkbEaDAP8V5ExTAPh7ZBgwJXdqTYmL2sueNzkgwGCakN3d6K1Sg9Gf3S",
  "key28": "YAM19J1ZuqWuYSDhV4jPjy9gJ8MejVMKbQa73fakmSq2CFKuUBdP3huB3k5hR5hWnagdDTh1Lnpye71Zo2QfLxB",
  "key29": "5fdPrf1EhtrGSrdXTy8VYRS3VCSaarMyhttdfV4MxE65u3FhZYTkTzfWJ2C4nj1xYD54PysLUhzaLdrv4Co5wQNN",
  "key30": "2qAwZKZ5XkSpmozYaVEwx6dVRDpj1LEDZ2g7r5tYY8H2aAWTjX7RhJcswiXJaPgwV5Cvi2QPSTf8LE9z9KHmrb5y",
  "key31": "XqJi1QzvAALH7cKQrx8NssPHzP4WQa4rDKhUDYArpbkbePfeV62Soo4KNi4FaUQE8gdi94z2TD7HcUKDErGj3Vy",
  "key32": "3eP2TTMqvHrAFPkvD4zRvTu9LdGuNFkTRBg6wtRicXStDSZtnaZ2gP2Go3gbGLmuSTdMVm3CHsbDiZzubETn13Ks",
  "key33": "385wgNxdA3tv8Sv13rBWTketBKsKHKGHxaSSXXJPokgLo5kLruJTQ4JQWRuqgTpksnT1CatyPun9W98BZBfHaiay",
  "key34": "2EC4NF3dQQMvzNyWbbsxRHbhDMnoPsHURATjDR2hNDG2CyW3s1KhHBjbLX3xrz2xx9sXHeMGtTtsxD77g2H1gZXq",
  "key35": "2MLMCDYpPvkKeewHheHid7ZSjKktfD4Lm3DzPFCVULPB2bXRMEEqvB1qdQN7xNpHdgJ53BsgQQ171fZECpZDgD3",
  "key36": "2QdjEvNMcBu2Vv2XWM7KXnkeDShMXPJ3F6NpfMR2iU9N3yqvRYD2vP2ycW7YqN3LDnHYy6nzNQFfD3tYjopzYTFG"
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
