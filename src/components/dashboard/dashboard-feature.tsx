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
    "5FMeSkePRjY8wniRQrtJKsz9LcHbifNr9KCbyRqtiFVsxiMkqpNekpEgvEGzqB9yXeThXXZzA9wxkHAENvBK24un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXtPY3FXiws6wrCVcJqQdYBuVPHcFQiC1EYwtB9Gr3dZfZ7xK4FWnNDvSrDPR4FS3vzwCBqdND1AFAT2sRSqbuU",
  "key1": "5Lg4PcQR6rwWViYBso15T8i4cEypn6p24S61TGhEPkSzsnK3sYphz6RU4kyhVZp4JwWAvPors8rn4nAxaUkyfafB",
  "key2": "3DjYZtj8H8MgDM2cNgGunEQCs2FgGvE2NPugCG89Ry2KfDi66RxMhKNjyS4JR5vU2u9nfRkfxMuSQi3XnEw6sdUf",
  "key3": "bQSMu5JrJ2JaQdgRceHKbBzWi4JjHusnBZLD1t1cuRNPaNZP7t6KWL52ifSHYcNggVfveAVqRTjyfbrY897ED8f",
  "key4": "3YTJAnQFCCtqETaszx9EsrrVb59Kdo9D1MTM1zwRo1YdNS2cTxY8BjJKKrZG9u5JYe29UM1KWhc3HsVGds44nAe7",
  "key5": "okXBfRUg8RGvE6RV9TRNfYyc8BBjpTL9vRjRX2rbevWbP7o3JG9eRaxzspQ2UVQmg5f6Xz7JHMiyCEb4xwuMFia",
  "key6": "4FzQ3W97SeQ5xAdT4v21UWdfNoAuJhfBvfv9kZ2jG92pSES3M3WiwPszsVAbfJF69rzQxFsBhCXpC6WSfETcYwFD",
  "key7": "4qJS6uwT6K4jwCppUL9ZTCJZFnfRzdyfjPBsZynERT52kdnyx2UDoHTrkriNnMcvsZyS2xA7hwpA7FbwuNVGzoMH",
  "key8": "3VL7G3Q73e38QvJb1hB43o8QkC9YEqT76F131dZa8ftXMphTvVCKNE6g4gvoxmHYmQdQjsrYBbu8k5cYNax3FycN",
  "key9": "4hYxZfwKmM5atkDYF187bbByGnJjARSQHjZuh6WtFYSNfd6sSCmqRixzhm9P6Bznx4V4kbBLxMFgWJH2hVbqbfDm",
  "key10": "zF3z51RtBNu4v2rC5aJdPSQQt2CT3QTYs9ErfeZHdwpdN8ioHZ84AzLkzoYLKvt1QjRTWeJeX4zZapLxM7NJKQy",
  "key11": "54FpCwurksmFMTtHxtFb94exhkH7VJpbXuVVtHkvdnVA6UeAfBhjgY1bX6RGE4N5E2Gy4QbD8wusAAksN2oWSZ8M",
  "key12": "2C8FcffGBNXKuzbCTXL18cjua4s8kLauNhJEsKbnkyo91TDhMafWrjYNx5UM84pwnMzSDJ6w7GxsWZvkTJDBuiz3",
  "key13": "XVbTojJw7zhTFTG2rnWwmSvmEnsM5JWrzv3X3CeBGmLKre9mQRphr2Hkx1ianFMbjez7vErbYdQFboSH6eUmp4B",
  "key14": "4UTfkiajiq8Up6iSiuEPio1v1CCASEicWW6sC3Ky76FmzqkJFdtZUYwLMYnFtKBPp2BUZzNpFSHhDRPdAw7HWigQ",
  "key15": "4T4UsGBaZnTEDbq22P1xK6A3cQc7USiVc8EPgKD5ZtNpEN3R7ykaje92R7LgvvQNwUBvLKa6T3jNAEjMsEtmcJgn",
  "key16": "2YfzWQia9T9kQdYZGeJ7ieApPxVZmL5JFrSc99MFaqi1j6ktczVLo1jawcDTYL6NbLKVkz8drKPeP3NAV7LkT6zn",
  "key17": "4V1Gj1nMfsmmMvfT8ECZ8X4qRf14d4aCgzaoVvhPRRkmbKacgBNLozpRua4Hy27hXGDfQSZTeVGPQwZhDGof2Ri5",
  "key18": "4vWabo1AWiNuBFFiMbnb7fg3eLoxtPoAyTKvTayQh3XMDy8my8djiGVAds5av1snBMZ62RMxFjXvcN1qhJfGhGBF",
  "key19": "3j6tzKXTjvtpA1nbGzvnyrhpBFBSAF5J6cwyWbRhuh8akYpoLydDK4nKR9sE9Qa2rPWVZoJvtaY8eCNamjbeBDQA",
  "key20": "YQTMMmw95uyN6DhJFAzqLcb3wia5JPRffVYbZYJUZ6Y9M4DL478SCSvtzBGYTEh1b9kRTycD1m8ztwUMsUA5vsH",
  "key21": "3zCPNBjMgveRrTB6Zzdm1MX9NyXx7d4VyxcDrFbg9sTZgSoSoxnDmsrZP8Esed7aDbx9AF2iwtUNRPL3rudeFsr9",
  "key22": "9xnY7wCcidm3eErP1SauJ4a4Vq8gLPM8fczk4jLq6uGZFRLGN26xpTLMdgbcJftaVtZDyuP5BS3K87yK89mvpx1",
  "key23": "2hto4Pjeqy2SQV9XCZTrcYg49bwAUFAYehmDrPE3KjxerDQfDxisnteZqc1Vjm1255WxskfQf6syFhjN8CQ7AzPK",
  "key24": "55ASYVxQNc3FhV9QBfezrUgRj38a3bjCp3vdWWHrT2JEJYdy1Cs7TyMheZu687nEAooXYJvCCW7Z23vgkK6Mnzaz"
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
