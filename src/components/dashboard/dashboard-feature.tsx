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
    "KZb4e5CdSmFdmdAMPs71UpGs8rWq8KCP94XUVeSPgDV2NPpkqeJsAB17yUCC9VpEiN2M7tDkxQe7wb7Xv67dg8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ucsQdB3JHMEGJTE6TPN4QnvJxcviiaScrQYiKHHWgphpjiN3Lp2AMGayeEzSkf2acpG6pNbu6Kx7sspNdUzM7zU",
  "key1": "2rLZxohTKFsySrzZ1tzAKMFyzKHVC9uuRM4b92HKgociB9L7DgMTWQqFkBP8ChWjMXLcaFzfPzAuztwScNC1S2Px",
  "key2": "4ZFWnFd8UZBXg5fLh8FqWhJwPN3oQiuMQNjp7s3X2ehsA4AVAWbXQKQt5fVtti29dkpHk5RzyhDH9QrRPCAMkS3h",
  "key3": "5ZCnYoRqwvdUJ4SQGiBskGzw7g5rSjEafpWL6MsgJuJFadGF6MBGisna1Nwcbn6CcW5QwMNmY3DGcYU7WdKV6bCo",
  "key4": "3syPzYVabrr9WQGYF1Us6svX4wXLEvSFNmYsg6FZcuaGobW11HYKgx9SdQrc6vjK6sQfZpELRGSwU4TFeYGgq9eb",
  "key5": "5sfjsk1ss3mwXDFkszuZRZwYjPbTGZnb499ta9j3s32MdxdYidBMD9CfizTyRUkY8JnxQ8ELijJAGPhm9mTUCmZr",
  "key6": "5k5pYAtruuKcgXBZKoVKQ6uazEUZtVmDbxLAbSJRNFJacAxmXZRYQ7AYuxMycv6XZ9CkwSWehx2BCrMcZmQ2tq8D",
  "key7": "49YWmBvqbMBMed4Y7peKfZspbghmxYHGNvojLJX5vFNpPqA54YPXiVw3uDuNVAc9fvtUCXJzPTj2r3kNHmTACmwm",
  "key8": "4H2EFrZ8CrFHYSVjBaXb9WsFptfDo7kxaLsPR84eiyuDy4v94oeiQNSFXnahekGhDgo6RP2Caw5aAarZTQgmY5L7",
  "key9": "2mUhRuw3rNVdjFB4ScMdXdiwZwzHs35ddUTXHQte7fMrwBECSCvJzVi59Fopuu7rv4yg6fRZAnC56ChXEc6XYKGu",
  "key10": "4UZzF16kmNoKNVBrUHAVXYx9VHvLUC88CUJzeSkzTrbEmKADU21XFazYXdANwcrYW48QpZ7FcADuVZ8mXpUn7Mp9",
  "key11": "4JHHfbFLEUpCtQNceBHfb4XBSBxvdz35aqhvF2CqyQXa2GjQKdX3bJuC6pwnqXnyp2DW9kpxgQbrRXf7vnTzvgHt",
  "key12": "28zsFkYMnMrtEvzjTD2wciGfXbCgq7jk2sQvNc1Bk2XS3YKbGhsCAMvfD3NHGMsuKKLpyj5F7t8Km6anW2tb9F7U",
  "key13": "VotRc3TV3BEfgwSa7izUnkHW8Lknrpg8gdU4ySABD9S4AjeosAQNXcmLrR9133Wbr7fuoTJLVhT7Ea94oRChUdJ",
  "key14": "25U534KUNhMyxP7Ef6WCpY664j1FJnvzDATsnxFDr8JLBanDjYbxB2fYALcWzWU8KginV4d6CPWo68xZJUtiSP5e",
  "key15": "2YWmu2GuaPQtUcn3GiHt8v7gvH2FxwkrySXPXkDWs8KnchdwRxFpdHDXK9zwXpoFs6RXkwhxAP5Wq1e1VnRBvB4j",
  "key16": "5npv8yUqFhCY7tpufrHY9YM3w5qxEiDxisguesh4zf78XpNBZaYDWGMaA3dMGA7oTpoFcWSg5WoAvFJpvNeb1A9N",
  "key17": "248jRCJd5x3whp7VSMzaDxdggf46zuUgibpHFfKGXZp8TLWKEsrbhMpgYjeprmsPExP43CquLSJVCMdG1ZXAZnkt",
  "key18": "2Vx9GL5Gy4xrxopEaRHNHsLtRQafNGzKJAcFAphodsGYeJhkpXU3MgxTGKSfxktYAjPwej5K33NqKKtpoKNhoYZh",
  "key19": "2hysJdtSWvcycgQvk2nrCng475ZjgpL35BhhegN4QL69A948cKMS7UKCFTiad6XnJmshfDthxM8KhiWxK9WaojpW",
  "key20": "2zVWNkJF6mipJ6ramzCCJS2PtD2MSWN54KLgZtPqYaGo7aM6ms4bgTzwEXRhSJKqHC9jEW9C3u6mKM9peUbhtyX5",
  "key21": "45u3w7PGHGorA2WJ5MnnihREuRTohX7kveX8XWbDLRkhoUMviVF9qc2SGfED41e6vHDPLsEZNT6inLKmESdeCm5R",
  "key22": "DRxDB2xhzPhxWSxfcotw5YBsqqrH3Axs9c1BNA3REQpjLUjgE3FNk24yJ4HH48XaB43811t9yJJDNGjHWPTQGDG",
  "key23": "4NuKsociCQLYZEPDzimLGHpPT49deitPBZQwUcXvacUDwtYHeizVdJm9pUdZzH8gSVJphRFwMM8pAzzWHdMnvAk9",
  "key24": "4skDeS39fqo3fjPZDNpmXSiFu9eGCfmamZYoG7Po5BBj8nxKpYT5YmnApj8vRiRgs8iEfR3taxLBGjrFaCeGH1aH",
  "key25": "2SRe6CfSTtJ9y2K7GmKE5VURTzVa336popv9YJzWLPxHc8wCdLCxUNbrFkFrckZ3PgS7yboUhuwaeWmcECjepgmb",
  "key26": "5E2FL7qSsbir9xt2UTZgRpb1UiNECPSDhJsmtaPj4w8njMn6DWxazdC29PJcMURUdCaPwSLXjBMgNA1et3Xwey76",
  "key27": "2twJTKVyrdmPdLZdd9E2gPdWx5x8jC4prTrhho5DmSM51dQiiqvUQARDM5yb94THcVnAgYQ3HZy5moAEFFxjdaZr",
  "key28": "UHv5SD1PDocLTwCRch5Peg9wmsRhwbQRFhrkxD9ZdrjJW2541XWzyXpLRkSSKEX7VZQMAdHnSaXd33HTpZHs2hk",
  "key29": "p3tjdJw4WHY53U93SsmmCKuNtqUfVnvWMzDNVVwpRpNp1b9tVLomZpBAou7AktbXtAzpE3egZycB6hevgpr5qqD",
  "key30": "515RXz1MfRgTurcpuAa7s2eVz1sUvuqkJHsNQEjuNk516buRNwvjRvo9bEfciF773iWNrCgZ1y9bqpxk151gMnAr",
  "key31": "624kc7yvwndwVXcSPtV36sNEwgSmDg8TMKCS5P2CMfwyXCBY7Xmneb88huM3axoXNabpcvvCRqyJUBPjfgJyqAFM",
  "key32": "4D4i3gV7TD1jMGLJznWJo5NSKibyxAtnw9MMdhqbNKVhVu44nFoYbws6pNKzWQbRDmDXWfqosta8osXuQPj3gBUN",
  "key33": "2pWeaBeHK4Myktb7QmXzanCaTEMgwfyhvT1ViLczSZotHQsirRGSuto5ryRQrLRjttnzB9KH4XBK5GexK2J7hdpi",
  "key34": "3cuwSbQPhBUZD791M79PrrJX45m3J4r6AQcMXoF4TNt6CeRGzuQdGqXpK3cWxwfJ43mByDTRVvcPe8q8AFnGXkUK",
  "key35": "j6MzSSRpQBZ2J6A7U5gfFGCcY2KqGVny2FHVq1VnaUP2t6untJhWGXhB9yTt2XaycVfsKH8BThkwrg13kV4DHtM",
  "key36": "2aFjdisV9hMpLkRmvT5HZWoDimLBVp7Zq6Kkmn6aWCr6N4oLbBJwUVHLePg92GCBpN2Jyz1V7yhfaEP7gRTavhca",
  "key37": "5DpLKYrWG93oHQyhvA6Np2EA2jMrQUakNBYQdWayyiMgiLZwcRGGwpnNX7aXLLJZP4r1RwPgibHG6gf9M9ZVi8Rd",
  "key38": "jsqsABs1DZoTxFuKcvi658JYu5nweFturdZruyYXojsyuPXZbkx5md5fpapcdmNiZXbNxqAFWiyX1vd7YrcGWiz",
  "key39": "5AbEpPn8ptJVNWd8zAYEcDQa8E6fxh3AWSycVJSwZTKMJ6BU36F6wY37QCp77E79TYMugJ35KueMmzM9YaRBwkK"
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
