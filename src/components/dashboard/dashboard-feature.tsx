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
    "4HKT5Qo5RCpW5DUP9F18eG5ZUJoabjTTMv5Ksuo4YSgxKoaZLyQYgNcDU2NoLuJAcq7zjLiztvsoFVBQDW9mXzYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ocwsFyjSeZ6tQdqHRskZPtk5HArHmX3FwdKL8TetgYBbt9hzmCqUfwbdXwxNKkA2fTixnQ4MNezEurjwdtzt8Kw",
  "key1": "5uDhvhxxTPdUpL5BfV2KHghe29sd5Th4aqnMGU8NdLesTbnbKsdRUWi347eQmrgNVbqgSRZJzG48X25jZdNJ1jb2",
  "key2": "5uJNUTuVJr4xuwG9XLvJVvcVpJ2zkJGPURtsTqdpzBYQZ4ww3hhStEe89ZjaHC71KJ13VTGPqxiB1tq252GT7ASG",
  "key3": "48xuQ3FsfpX6DQyRB25CB2L3Jj3pD1TgdEscNg1wj17gDsuB4VuVicsRi6zTUnPmuNo4xpPkx6ZN7uLd9Ssg62WF",
  "key4": "5w68hKzijj9EyLk2qG35tbK232VZ6Vv5GZDC7pZRacJQM87mLaJYcUyysBfLioEffJ5AB92BaWjnarwgFnYEFDHt",
  "key5": "2bkg9d8BnPAzpUimWY87oUV4gHXaHroRSzAAujwWr7G4SNsZXwQedistzqhCQrtvbLcfT3ZAso4UBz2b9nob2p1m",
  "key6": "2uVWk71vadn4WCkfdoeBPNPYRWgoz31RiW85yL8Sv23YfdUvDW8ZfqRucNZWudCbMFUDq339XVopcsj6LKYHVxYp",
  "key7": "43Wamx3AY33SZ2ezwSZTLSuYcjmMgsDToudEHUJQ2zUYd9YpaAxU39SeNViwDzBAeTZqmb9JTwzNWp9i7HLMweyX",
  "key8": "647z8z5TiPG2ENaFN6KoU4G8KKb6dKJdSnekD6djf8Hy2MDj8e9hiadCiAn5XkNaNFTZcTdweUQWhnhkMUepkWwv",
  "key9": "4mFRLqa9xadPReDmvjbq3sk4arB6UgVmtnXj6xi3rjhC9eJuNshCr9NaBMCXzazvN58wsYFHDdmFjRUZvuGgsQ7p",
  "key10": "3SGwrSa9C5mK4QaPZQsJKiTvfsnaYCngPGUcxooN7D5pyDdnZ5xUMcZoxDdTDyciT9tH219RCkDFt6aLRK8ckqvg",
  "key11": "5239tU1NbKtPVefRNuPz7KVGpHbgYWwpq7fJbFck7q9hJ5v5rE5tPzkLoPTwXLtkrmmMAmgnQgvC8UboP9LUQwcQ",
  "key12": "3jzUA73NngC5ftdGa1ZMmgCjGLVpMbqryX1ajjMcKesamRBXbMUyLZ81b49NVuyegvcoYaWE39tcZ8VALUC1fHPn",
  "key13": "3mvddnKjkohqSuKzLVeWp4pzuyLwvozABvbRYEK3pa2evzhLrRd6bGu9NNMxQQhCFKpw1M2Ubk6i5qVY4M5rXjF3",
  "key14": "3L5UrTHhnF7vaJWh7aqQ9Prd5E1t1nZ54H8F8jPfG8KXKASw8R376XMZXg5whFqJEnqp5kMeLLAFiviKaRFJnt3o",
  "key15": "5PZVwQZ9au3YHaUxigD9DJLHuqXZy2GQQQgNmJFVww4ET1sQRh5G9g3xa58xVQhmjvWP35JAHdM1UDHjUDZ4rsu5",
  "key16": "28R4EFgzvxzHaJ63GqPiamDx7YwVfcdBsovjupbu19nEczD4J2dFPgxBDvX3rVNXZLR8Y51j8nR62jGdugjy8oEE",
  "key17": "5dxM3tLMhdzKt3qp7x2247dy2R5iA4po4gwRTBm97HXnrE6D2mtnUDMUtFZ8P76W1CbdRYtvDEiYZ5fDAJrvPC3F",
  "key18": "3ZkjeVkrVXjBjXqB5H2jUpK3MuK3EjgEa1fwx6UAy2evkrpCScKjzhX2z6Rp7PDnmv1LJUW4XPSF1ahaLNzXtg5n",
  "key19": "39FUyUrdxoSfCjhqyiE3jsbtt8fUT5rEfY9HjYcPhTb5PwmMpEpbyXqcedFujDMCQBNNtriagbxAg5Y7REHx8voy",
  "key20": "aaYN6ep3UxJB8PFXgu3Uw7BdDiyrR2JiRQrWgWyUQBQYF6ig99xSK7KogK18uAgApeNdN3obJQYY3DpXspD5AgJ",
  "key21": "4QYmasSqCkd5wJuFc5XHoxbsoWy4WqsvYw4s2XMS8anEYX4o4hVs1UwNeQ8rqwd3na4kBCTPP9B8tvpfcVArTCap",
  "key22": "xrVM1252AKBxWR7dtacijQuLLwQKC8tw3HGwZ1aAz5X7JsDNQt63kGGRBXSWmBsPcUoqrPNjqW1KubLVyBwftnQ",
  "key23": "4Y51Nn32mJFn5AE26upkcrQymZ4t29qhh6cX7T7Vkos41dMAuAK949SNRYYv1Ktp9NngUWxCCiPzdkghTawzUDd9",
  "key24": "DDJR6FjQtk16pb7AqyZBtSzaELFa8UhrduuYoWpgH95UYCzo694vsrHum6Ka9q7vUoqpinVjdKXrQ1WwjhRYwui",
  "key25": "4h8Tt6P1bfSa9WVn18sX3zUD91FwdRubW7s1U8BRXiNGpfcz5qpWhcUwfand4NGtZgoQ9HnZoWr22vyUE6ofQGb2",
  "key26": "2UKUZebM9ogYaToUCk3KQPqtQt2MLtguyqo48PaBuufu1ArTvjo4v78bpwkn1kvjxi51AQwE165tCfY8HU8Mdr5i",
  "key27": "4fB64vDjdAZfck7dyMvtj3eMamZwa51hm1oHEnxwBCLRtPnr64zy8vRfCTzeq92y6udGxo5WjWYqHickTchzuLBL",
  "key28": "4S9D7juoDRnmn5kXENgS1gVfXWj1nzNX2sDFoLRqeMMpwpoH5T9SuKFTw9JozwmV5Eiqtu1NeRVgXYpwNmWfNCnA",
  "key29": "4DmBzKW8G65nPkgcEcsw1mhivU4EJFNuDRGZ3X9Mg8Wew2h5vBThpdiBoqYWwhBYtz4n5YgS9gi8GhJTYjt5A4MZ",
  "key30": "5skqGVgKUkexCX5LMyHNsciwMY2qHtwFBY6vgu7hNzf2aK8A32JP5dDhQYC6MuM5aGtBj76xBgd1SQyMUexEkARF",
  "key31": "5sZJUJ9B5k1ZUGqYWRmtZCYsKM7KHwTBWinL6qnsiEJpXUz9E5rFbf9tiUeVgNqVjeS9GDzAAfGM8Xksi3vx2dTR",
  "key32": "4oJS53D9CKUJrBzZ4KEkbJsdEWh78V6mvpdUNdhPfTMbyPwQ1yRm5KrcPxEnaKNtkXtVTwkHYXcpWJafzMrD2zxr",
  "key33": "3Xipv6uKGXwZu4BZTK31sXU5AEMQGKedb4EoLwUvgAqzrbFKaG9KFEECfpJHLRAcAU7m28q4woFd2HUihXn4LSyf",
  "key34": "31scx2GDEmfba24BEAmFkLVLS8uF41Nb7x6PbQTGRNQdQMQUmLdH4jPC4w2xQUhpyyoQC5TDg3RmfPcWcFPAeMUv",
  "key35": "2iqBu1bo8ETfeEmY7diUZwTFKyMRPx52VZP1wkRtm5Rk9SiuEJewAR2aWR2PkoRPijLENScugXe99YRUgxqcGGZD",
  "key36": "2dsnFWLk9WD9dzXhpS6doJ8Uf5LNM15MfcAJb9AVtgqVHYKKAzK5hDBcR4iN8V4rbwp77s95Ly3Z3GQi7fNfQT3n",
  "key37": "h7AZpFJbe16C3rbLHrGRHdRhRRsHUzesSQzqwysvVyTx4WeoeB5dEdwBPF6Qaha1jYQngUjCnSWXpWafBTeYwJx",
  "key38": "2EKtcoDaEu17HbjhP7AuWZVmK6wS7aq2tRyC5KjxhTGsiXTEaKJquDb6GhULn79FZ8Zkz1RwLNLQC2tefYToxjFd",
  "key39": "28i19C7onde9Fs4aAreqmaDrYd2vjdUTNoEkdyDB6MUVmmKu4YAdjfVjSAUSFBAemtvZ98DNNMLZdT4DweVnFNoA",
  "key40": "46wqpqEFqAoMLVdxEXv8QTjb67FdMSGoM1XcRJRiALevyEEoPa3AGT2wtHxyD7k3VGVP6mpSMZkq8Rhc5MPrgq4Z",
  "key41": "466LvpGKyyMY8ytp98QEreRZwFoxnigK7mLrJXGLzk7voYpkYBNxuduYKbsXwjQLxysjDa3L1vMJcdXEFSKG6Xwa"
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
