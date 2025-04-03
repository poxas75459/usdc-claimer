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
    "4X9PfnQENUnTwozitDWiusGaaQKQkDLFvY7GvTsd98M3n4sYtBponuA59dk3EF3Dhun2dn7bUMAFoXgQtWtN6UDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kSf64xFHhH3LjJtuVgsTgi31TP9a57G63XkciXt6XfGx2afqw83rDDaYaUEwTagW5MyfnqpbjJAKhego3VW6MEM",
  "key1": "5rQ5S4EX9TVzE95vdDVMVw3DQDL5oYzakB2G6BXbLc15uaLzrZQv5VxsPTTrDdm3Ph5XB85DsxYYDfs3K5SvnVEo",
  "key2": "5RmAQgVL3jP1q1YAtUbks7GVDubai6qwxXBf5U2PumpnnPaBoZPuG4EqQVTGB1mUTn2CQ7MBjYN1Z6Fb3o1hqk9C",
  "key3": "5wkkoun4TyeVWzB9ntQ8rLB686BswTdSv2XcDDzzA8WSvQp8VoiVZPHufskqyhLHwFV2qsj2VD6tf581WKEUtFE3",
  "key4": "4dUFXkQFw5yPQpmtzp2wJq4ds1KF15NNuxp6cJSb47RAaXFGPUXwLsNGNshJW5CYhBM1QyXYTEL546EiiFPxcVfE",
  "key5": "xp71bUSVCFFN3p5UNNSRQALqUTM4hxJRfCEGwYEtFgGqDcP7oXtXBnxbYNyrpSVXkYAdVn3JRiosdXm4kTsuK2y",
  "key6": "5FurbyRGiD6bydjL9vrwognwh2ABLnPKCz5BVc9zDctda74q9mT2G6QGhqCYUCsq5qyyBiA7RnYzC6peW6chvJeq",
  "key7": "2xVvrzYqrzW2fJfe47sVFtBzUFre2v9aYYbXZQRH45M8L1cX54oX8eH8YHJByJ3XsKyz63aqL1iGSCyJ83Y2ixy1",
  "key8": "4K7WxPDGNoojM4kuGnCGnx58Wwt7cfRYvSc6AGQgEXbouyiuQFhaXdBAF8Le4ZMLYYwH6UPYWoqARGEJMWrMjm7",
  "key9": "5GSA1HJxhUWTmEqZWYTHX6dqdMkZjsYRFedRsHt8BezDDmT5LW8EPK1wnpomLrx8P44mWfau85EDHNigGXVh79fq",
  "key10": "3u4tuh2Pbo4zV5Sb5AARJtY2ujm6rMsVGaqAQWwUKzQpgQ119ibtFj72sP5gtrW9woDksXTqRnFCHS3hZCukhuWC",
  "key11": "5TmzPb3DJ4SKbrT8nkQt94fBD1QSERbPHPK7brv4aBwgaZEwLBwhNdERDyNnZ5Lt5vGVoJ9nK9D7818raHGY2PDE",
  "key12": "3pxctNzogRLqrNqvfsE3AWBzW3o8K6Mwkxme3P5dTDxgaEhjrggiL5XJitvAFYmYT5DYv7DrvkqC2dBeTZtJBrzq",
  "key13": "kBRBpTGGBXCyVioGcLrTk5pFS8uFsaVfhExmuGjTkWkfJVLtiHb9djfq26QKPZ1XSQj4zYenxP6a83BPefTLfDA",
  "key14": "3hT3xrtqx9dzuNYR4NtUaTvhQUFJPtSDJFHCUcEmQEpqRKc5eYyo94rYwvqRf6GrXrddbLKQUEoTNZ3zFFJJa3Wy",
  "key15": "5bCbufCYp8sE9PpvjP3Q19LwJMqdTAgadcdoKre9J1BAkkfw1HQBpb3hZQv4g4J6X19W66tUYrevUhsf655fSsfM",
  "key16": "57GTptiHFid4qpdtuu1PRWNDoUs94GwLdnmbjXCVQtJ3N3JHPYLqeAjaFN3wWtMSxXNaHsJ3CSXwH99TSW9TaxCt",
  "key17": "5n6RSEjNFK2Z1XCSJn7XD5EpWtkzJgZm2tiRpDeM3uRFZt1Bskp5BBn9LSF5YLiqxyvpmcCdMbWvSZBVg2Fho8bx",
  "key18": "5G1WKe98DHsG7g19Q1GmoSyxm8s9akjz1iWymWg7ULV2UmBfn8S66Hzat8G5aBHki79NhjXqxBbTzooZRgJodvfa",
  "key19": "5caSQysXY7onaC2Z9338GGfDk5RBJjhgHKUWbdLrHJFnaX4De2rf4ztKAXF3hmFHN4K9wbT3vpkHjSMeEJD77Zen",
  "key20": "5bPKCKohD8EgNYcB31ev4Uf3tSEzuFR2BeXTVHcmo1Df2NvULzyo3Ay8a6kqoVUBQR2gSu2TcQxtx5XyX9Y83PCz",
  "key21": "2P4WTATy6BFVH6dacdnCq873dTF2fcEFdwX2pyD7oGnqkShCrJpiywjLna6BDD9XHnFW25u1PAqHEXELNF3nKbWM",
  "key22": "4qwTkLRFdsSbbqxkB3brVZaRWdZL7jSAknxarPbT2id6i1qD2hq4tFjZwaLmDs9jQb5chAQRYsab2ri6T9FWgbWR",
  "key23": "ZDpPFZLW8bwdDJ5LMsuTUhuPZe8DPnf7pHuJrxp6YqS9Y3t1zEXbqK4RPY4EfQKajG7VoziKgemvA3PAFh284eQ",
  "key24": "tepBP9NswUQCjy2WW7UoX8WgjTeCU8mxi1Uo1b4gtAU8NFnAisVnom5ngJtSHXZY6HZ8npsd7n87NMChmq45JJV",
  "key25": "3S3CftdyVnLpzTPwWHaoGFZ1URRh4XvT1LQvpE6VEF3FGaT2wCr29qUHMLxCnMhnb8LcSgXRbnzRbe4f21nrZpnb",
  "key26": "MRgX4uFrHVdMTMGuBTUe4cpHoDNcerfau87onbbgSSvjGijKj8ijVWtm9bAu2uRFwBHK3kpz45mDy2DU8NfvK9m",
  "key27": "651MfSCPA2SEAdszZXz76RWJSkDMVxw9WuvS94AqxSdvyvzzoQPqv6fKzaqqN4Ykd8XDxq7V9ZaMVY7QAitt4z2d",
  "key28": "66r1TPVUUG4AHULCvznoiK2jiz4EECU5gaF1FYMeRPaTPzrUU9iWj83e3DyfP2uxk6bjfYeiXGw4fPo9vWuQkc8D",
  "key29": "3MsJ2J9Z7zG1AgK5zcRSuJFcoXcPy4rtzEy9EDZ1cwBngntDvzbTS2XY2eLow7pEJmoiJLbm8Ckg6T4V8p3Ls8E5",
  "key30": "mKRHHkWkFC3hKh9QHEzwGmXX16Cw9VzNxRqCqzKERHbNFHuQ3cL8yrnr7XMDDyFihLnHPWnqGWQrud2bsCgEFC5",
  "key31": "5gNE3SBdkhAUTcCaQ99SPh3FJmoF68HEwDeovU1s118dCuqLiLAp5efsf2omGBBDWMvb36maFvf97fccrmQ5a2pD",
  "key32": "3svXAT8QHgVBnmTDLnvfgHdPKAkPSMNNCgVDLnymKuUVwZCdW3CRP1PzqAWTrbbjXTDDcZFXA3X4j2ZNq6d9KDvX",
  "key33": "2SS8NdiGewiTH5vto2n6xhs71yVTcbGSnuWdF8eqXsYRqDmVucAeRhC2M6DDy1tz7WmVpZyRiMPycRPfL4UrLW1n",
  "key34": "3CSZLwPczcAyPaXh5ZDpS37jYarByrEe8wBnkqGo1oFrPcwLQUp8fEeoEm2XPbMpoknV64ZAsHoB6ErcWi1zhYiz",
  "key35": "eE2GCA42HmbuZoE7bGXx3SVW5Q3QGs7pud4ogCyin63ovFsafBBU9Ps2LaEB9RAHGFj8PYhN7aSCHXEQHxJzoin",
  "key36": "3oZJfSv5rLaCWtQtFk2U4rGHcvVnD2fVGEG43oULDt5y6bdKzkWgTdDiw9igwKqBgHrj9wSL2z9ffZcbq9tQVjwP",
  "key37": "4wZnu8Ecojbxd4Go7v72UCkyyX23wzQZ72VYmnYi1hZvs41M2YHrQTemzBPvrWU6EhLX2zi3Ur8hf1aiiGhxKAan",
  "key38": "3ts9xXs3N2mF5eGKkXdmhYhZeVLXyMrhkGnPjXRExDAJUDrCkr3yWRWoVf8icDH9PxNo3HWsk3aQos3tYU43r9Cd",
  "key39": "2evjiQvYbmTd4gCvgdyFfmZwfZsiKwfuEpoZwv5LV1H58aYwUbFxbQ6YBZn42KoNrXxiKvASW1S44pNH7USA75qT",
  "key40": "5YhB6yqQJwF55FkNmnicKkomMaXWiMd9YSDuqzEYc4mZkYBEe6xpXNWFVs1g7vqBgdZGFEQ532yRnbFEDAEtnT3p",
  "key41": "4Kaw5Z7ApgPtr8kMeavYd49K9LoiPX9qHc2G8QnKxx6VMtpJrtpU8FxEzQ9ckg3AgA386cUBA5X1i8atemwu2jCG",
  "key42": "GPxeYMmYnevoLGgETApfVwfffZYjPP4hVHH95iUstyGfPRvm1btzRyWfN8pb7Yzs1Pb8xoyDnxxu3DEE8TojPNw",
  "key43": "3zKfqGtTf1CYKdNpnJFJnCYG7sRGLVERaYmuUZ4kzVXvFG2p6FeStxpBUqXVkFaH7stGQR9sq48cXQGr685UppPG",
  "key44": "66T68Hx1q1scgtLkBLbyqMXx2PoDnE6YgozYdfNJBiXLyHBdy9nvxgnQph2NjrE8pd2i4fxhvBUveraDvAoXnqkJ"
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
