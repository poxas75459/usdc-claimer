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
    "3GjRsEP4xnwMpahcJdpzgMWvJDE3s48EF2g1sRoo41aCKBUbuVzCjAkqvnVZh4qQoko8uiW6MwB89tMn5tA1C68o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKni4qkeEPWcK4PcE9sUsYnP6f5dPRyaaugDrmGods5zifoQ8xDvfm915VFUdaHCQJJRirFRHrgbqGBE9stf7VT",
  "key1": "645VwbAeL1aJXEaBNmpbivmv9X9CebnSNRZTygGqStrhKuUiKSLCB9q35CwXtsF8xqf2mQNTLU727wMtR2qX6JFE",
  "key2": "rZuwUVwCVGVxtbM1eDLHSj6VEAvt626aizQmkq7cjMdP6LdX8yubYWjHJYu8BLARjnd6tQ1h1ExXRA6FnhNqvJk",
  "key3": "ceXDffKoGnX5iPj6wC2Cif6MWL7MTzNhLuR8z7yRotXTm6QxyBZkfr64fiwS8cUbA6n3Hx8ny9Dnjbrw3jWKyaZ",
  "key4": "3HxoD8Zw5wMrSgJedXXyDoBdEkwxs4dbCiM3AwrKMMf2E8LJb4uQwy8NZZNZ9CCpAcESfusV61khPD3MURQRka3a",
  "key5": "7fshv8p1STwVRKSRknFgYtKpZTzbTyKdZ2sZgc8CyK8gtKtLM3a5kvz5X3MWfy5E6o1ecR1r53P9yAKmU6VbgXZ",
  "key6": "2Zv15WVr1oQcEaqBEgrju5NcHQGQrJx9qJWxZM1gbDJyrZVp8mJiZL8hzFZbH4jbxgauHCDFea7aaHEnSjeSrke6",
  "key7": "263fb1J7kURGZyksuaMeZPNvG3bfFaxzeF8sFsDSFYn8j6SfDmrpy4UXRMs2dkQDJbzoipg9vb4h7LfJK4EVzeUx",
  "key8": "kF21mTAMZdPS4sKcwwwvTCLCxGSYBmCDsxbcVxpRh5yFHwcgRrv2KrsF7GiaxtckjaF7JEvGQC2QpCz5vVVriPo",
  "key9": "4Jfb2urkFm94qjkkED1NGei8oeVTAG1KfFpipgw4k9DR4ZZW5gvXjBBsUHgoL4A6tAkgVcMjsbHDc7v8jukg4uRb",
  "key10": "4GoDCB16KsZwguicsv3HjRUPzMTCgEg5JjZWvRyukVu2fb6PyV6JTAj7mWCfZezwZXd6tu3MwEgDbioeSoZLxTgM",
  "key11": "3msQvHSBNaAkFyc5cMHoeUYLDkwmiegiWTkExomKgw1BBBMgATgXq8i854gr3XmKqwMu2QkYNhVqGtp95zDLiQvv",
  "key12": "4Qq2hothtSphVG2drbBcCppAUgfSn4sEHv9tvymR19BARjv3nSnHNbPFekbAjGyr5wDGFdCyXiAGnRCboRaJo8AD",
  "key13": "4yyeJn6zfNDuW7RDi5AEUXkY1rYDbbwRczY3N12KUXUKhi7pDHUvpNzYU2HejjXSMRwmZDDsgsvXs16Bo21ttcYj",
  "key14": "4H97dMzzcM1wB1jVYE3dvJuYxieKn8mBr3H2TyyrP3kMozz5v3FcWMrDMEeqzscGgFzqbB5A7dF2i7ihPecvopRH",
  "key15": "4agjPLzpk2jiW63xLniZ5yWWHXQhAiyrSsbqj6KCZCD6yGx7YbdjucZNMe4xNQ3jz5CC5H312PbcFTJYyHkqakXr",
  "key16": "1RztuyixYKDmVADPfXYWJAvVAx2FfMyzzm2TkpXYNtHt6iumCkVowB1oQtWSPqeuviB7EYTcPCQ5Tgcmx4D1K65",
  "key17": "5iJkV1AgQ2fMiE9ufrPXxpRF7ayf4f2kZWnEK1hWnWYowcdfwFLtsiKSxoAz7eAgSUyzr9GUCn1wSVuPKr3x4G8P",
  "key18": "3CFBtEgnbfCz7LYkb5PFFLcDcSbepkXYKPiyxLD6gGerHHWZTCqg7pVHZM71JuTUtTSYt1FPd4ixc4YYbMv1yEci",
  "key19": "62WoVwhy3bT3eGo6H4uFw8TyhiMJ2RtUx3E7mkcABh88KHLebhRvWKptTTAZELbEZBq5wsQBmagFZmbM9CESAh4F",
  "key20": "2zg8dKC5ujni7McpycgHDxbf2qHxan5KtUqwrB9YfhukZpArg26d5NYzvjz7bkjBm9jjD9oFeYYFpvCAEPENB8WY",
  "key21": "5oTjNM9KBNK7fW6oCEQFERoX9CcLjjbqyizkn1SHykpYVmXon2a19ZUGmSiCyNwnR4iENc4EF89pLL23Z2pvyzt7",
  "key22": "34z2iU8HSHBJcUU7P9TLXT5hQNWcr2RjYJrUohQpwCo52vHANJwbMyWvf7akoEVjjMstdWP6yW4f2sZheegFuYyX",
  "key23": "3jyDg3Xj8V3ywQtZNSmfnZyZaFGemDMh2DWdNsWRSpce55M9mbYYZ4MDe1RujU8UBKRKb5aeaG1FgiZ96pRG6Syb",
  "key24": "3bdnUmAtjZfrS5MtT7i7Q5ryWjvoyDzGK57BoCmEzNarbJMYxmwUsh5NMmRKFoiyaWCAif1k6hXtwBqrNKmWGic3",
  "key25": "2a4zU7N4bVTKCf2L88bBtVCGs4Ukgdz7QgqedhPNx5ed4hVjmpcrLhbnxaZh7wFShmim6kUTw8Qqzo2Aw2Zx5Y3K",
  "key26": "TiRNDPQLCgdrZ5Xdc68BSZXPhXm7WmCtJe1dXCtzhdnw978g7bESJjTM6SfsYvJ2k8V6v7Zf2929mkENWCukeiG",
  "key27": "23e8MzSPPbNDmxdYVB7HvpKnTSPgzhkB4TZuSSwenznmC5x5wKBE83fKecdE6DqFNB7MVMZVimqxtwTUybTtutEz",
  "key28": "3bcpxaPeW2n6FKJCzxufdX77RsiiBHAQWeex4G9cdQx8QLL5Td6Fj1wVrAA63PiQvehATiVYWRhiiiHFE3W5FLvv",
  "key29": "H5ocsW1UHSF77G1GoCaJxxT42HWW1xhy8xk3X7f7jcCPQeJ4pefavgoT5Qz5wXADbX5LGTHH14uiafF2zSz1TAv"
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
