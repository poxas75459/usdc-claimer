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
    "3qjqBea19YMzjazLgEbWwiiVT63KKfieoE6dnHhL4CyfVJPCdrJGDgekFrawVhFTyfrBJ4eSFDpJtjohFbP9uMVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKG4YBQZtpJEKjPuZRq4fMx11NmUvBEjYirEzujqc3Q8VmjuLgDsa66Er5fN4DDskDenrF43uwCv1w31kWbhTc5",
  "key1": "3NDeDNNuj1GJLhuPgXGj51X8LoUeAUg4B54rV9iZ7mBmzbpNaRQJokpobbpxvnfqqxobaDJFzxmhe9pjFKDrStgn",
  "key2": "2wig75R9rcURQnh4VaR86z3xWEgLEniHGLWftvbMMFHwf5y2aasng4cgwin6TBJW8pm1r8nyNSERyq17eTKheTx4",
  "key3": "5Nz8DCC4ULDVkiGmiPoSoQsj9iMc55bcWRPrqdA8akkxgAypNM3PdHjior1dpbL5uiqPdYWii42T7BTDEBZFhANA",
  "key4": "2oK7cAf28qnxXLCSLrkyyxmccbXLh6TL2WwESTF6JNLrLvLCsHdCNxa9E1WjVPKaSxb8vqntzMYxVGcpApBrCbE5",
  "key5": "fGy8D7iYRGZAEAXTd27xvSkfvtsKUuhpfJNAp1DEtGWVbBubHY95v7WqEBtk9WWj8T44pSnhW3yryqEtW9kEhFX",
  "key6": "5PAb2Mb8AwndZ8RCbPtkJeNYXj3LwMXktizrCkrfMiPNvbDtgT1yHZASjfF9NKBFoCbJpuJy5FV1yDBUfLnAxPCn",
  "key7": "yvXBMpZZZtGRQWpsXJvTU8c2aiX8h1LxA2RSBwVnZVVs5LGP6hw2f1wU7KYfhmzL79Dgsxwn72hvJtZ5t8fi2Ft",
  "key8": "2geRM41caXBL44TYJGUdLQ5qvPCtStVKZqhjiFeGjiqtsom8fEUhh8MoWbNkJGQ62e5gjb63MCApuyKpGC1f14cp",
  "key9": "4tmXizSGAXPVVCkmUQB9X1uQAWa6xFS2NwZ6qWoUmCx8EcoEQFJN3xvbUY8rx8vWmQcmWLqWYXRfg3RaaL6diWv9",
  "key10": "3GXvUap8Mxzk2e9YuK9rdzT1mWqkFTYwnRne9T2Nv7zqqyuDsNjJp3g92UqKH6ozAnCAAMnSuj7fFzuA3S9TNo9e",
  "key11": "2HbVZCiRxBxobAcvJBJZMsQinxwTC2VSrYnKXsB1tPSdDrv4Ff3AE98LushfaAjsguMTTuZqQCEesWMxs3YEg96S",
  "key12": "2mEeSVGhLKyp93o2cxJhuT3GukCVhRS372Cf3oiLDUvvns9kDoW8PMDh3uaMJ5NqsjjsC4DLjuGE3xKAxCJFYtEv",
  "key13": "4gapEMmSC6Z7TppnhSbEdcPMnsZRgnJbPi2ipAZev3XZXignQX797vRo52Qfb1UBPP197wpWuTHzo9f2YuQq4Ap7",
  "key14": "52F1TWyrYeE66PMjJTqcB8CgKAWDYFu563YjcdCEydpVLaNjWnSFeqKJp64KqRhx1DGeTk7tiak7Y6Xb2tJ5NnFq",
  "key15": "2Sqw189A5j9waR8ZqnLvH4YL33unKErXUZ81U3BQggzjXKHgPhr4tYeG9G8rjMoNuZpaZoMaqxQogfrnTGyu9nwc",
  "key16": "3zxRR2VL2qZTo8mVY7eENAniBbcYu4PYb7YJgeWMT9t2x3pytUC1Hb9wGYMeKZ9W5YapYnsjdtZnFw6yT978TBiu",
  "key17": "5cmqNSSc5o7LAUVvYTsHAVmJMVpA22jB45CVQPE4st7rdrxv7ExDsJN6HXDiH7yCCzGTEJDZDW7rFZE8KckPpo36",
  "key18": "8oWmbC5Sb69H64tD2Qq6c3rUQSCvqj9os2rQHXBWtVzeGEp9DAWCmw7SBuovMXVyE1r6XoZBe8MGVteuJxrNYjg",
  "key19": "2MAx6AHLua7rJQ3Mda2GBWfje4Y72XxiLgvYyDcXTL9FkK7Na28Ujt8NG8ktWvYqnfLdSyExMKSGRSKYtH5hypFc",
  "key20": "3gjbaUDpcgdvSkUQFi6gb1y9HGNucxc1qYLc2QTREbbarougr5UGoei8yvQj4nBAPr8rTMXVYYXyzAF3NSyooh2f",
  "key21": "zASUUEkY9S4t8ZAcVUcFLio4ywFRkBi6aEPSxCp3eGkPBBhVCu6VD6i2FbaoemiPqCgm5CWz2fN1nAim5ufG554",
  "key22": "mg6zZgv3JdQFLuYujKvcjqRsgQaLSHa8a6cmETuGn5qdzJNd111p2jNhQfLF9Ucji5U8SD8wXm7gtXTk5yRNwUv",
  "key23": "2Noyu86f8rKfjDgv4XzMx4a2fVtAqkQix9DgQybA5VEVGJ9s2KM7c5L3ASCKyD4bYyUx5deEFCriMystus23KiXM",
  "key24": "2mbsR2qzgtXS4TK3qWxvn6T76jRUXDdfifKtgZKiMckVqkaaVQboTgfRPoH6pbMsLVrLsEYrQcnDs8kbwoFcqtXK",
  "key25": "3KBki9PkSA6H4HzXqHXK9SP8689AYCU9iX5Cvg37b6XVAL93ykPWE5GHdL2hKyBFei7cWvq4Sp4MZjMBr8t2ND7x"
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
