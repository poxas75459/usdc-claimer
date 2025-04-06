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
    "4tFa6ddKNg5cgeoabZYjELPCzGF25nxiTtaAW3cmgJ1tqp8VwXrbYHbndEXLcZCg8o11Dv3BkBdiRJtR83odWC54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EauCnXZ7MQfi98z6DNf5A5TzPfuoS39nyoYAfavpZLHcA8TwR9VM2swtJGiDTth8XXLYczhQMkdmnTEj6FNLNNR",
  "key1": "4HJwrF2QfSmRJmLRDg33iBgchWAPD3tJHvmztTBr6BPca9AintFMprSq65D6U4nJuipc8Tjpt15Ks5xQ8ZrQb3KM",
  "key2": "B55Bk5sW7ktK7RGiff4An1n3fyR45Qa9EzCwFnV4txErpZKdSa6GvgXKTmJXGjq5Lk4AQuyh292i6UNQsA4L6gU",
  "key3": "3jzANf234SLLdUmhEvDuqUNgjmfjEWNTV22Npb5JM4kwkdN8gdg9MTTa2THSov7EVskxZjvxiLQ6Zr8mevKg4voB",
  "key4": "3DFYPigPKsfkHeeWXmmLqcmXX5QFgPGiGJMirB2BHp7hSrxYwNjwgm8yVmvC9nb8dG9rzXfjaod9K1ZL3kdeaz6L",
  "key5": "5WzG8MzoLabveeF732RNJwg1xuTFJaXwSmyrcFYKVCjHCe1jHYez9bWyvPZGTf1gDscbtk4DRyMo4ku4p3JusHMp",
  "key6": "2LFMnahHFs2tG59pVC3MTYPbkhtx8pVWsiY3V3UF4okviyAnBMEQpkWwrvsWDMdKBi94zB5MZEyqinkQL3tjf78c",
  "key7": "3SyuETocScTcYJUvjB4YJ39CJxTcQR4DjRH6BrhfwTAxE96t9w33R71uuKRXX3Z14NPaRjqPvmz3uo5so2YqFCem",
  "key8": "5X8GSiLJVV1ikVSxLGNZY5FRnk7J42nnAsKugYjYpfB578Nk75nfXgy271ir2C1Qxp585Uuek11fhYzi7fWnwCbw",
  "key9": "5Wi5LrQ3y5QW4MuCxK5LMMojtnCuHPPQxyHyrwpBMH8ejyTASzctoVSb38kZMPRXx5DJr5T7iEE4XKy8JNf3iTA3",
  "key10": "3ScxeqJyBX4yKYjQhrG8JPdDhohCPWU6iefRQyrXtSkR2gd6XctE8tzurJzxDmgTnkzSZADWQPZ8qiDVYsiVDJMz",
  "key11": "Rap1SiHKP62pHW1p4X88uLcDX97grf4RAD5ckd56u5thVnnJ1iJ4df5zThw2ytnwK865i2fQ73suAjPkfyjjbmp",
  "key12": "5tR5zVVWMgCwqXNh4EQRPuCn42gwPEfjmJeVMytbQPzUHeDPq3LEAHozMS4deo33ewcmx4i62NVZxkU1VMAi7RPh",
  "key13": "2wLzHqfPg2VMpKqgPUnXCZZ1aabFbdRUZD7kisv8fJs3VQHNLs2i8AsyzD8k2qA4obhwZeEiQnD5DSRK8pgKvyzi",
  "key14": "EG1Vff7oTRZYLwiwySkn6phTDg4VHcScWp4fyLktabQ4s2xLBi4pfNunboQcyHZi97gAKHCt5xzKPZSy3MDBET8",
  "key15": "5WuL8fdbaUi1B2m8NA62odxDmoqoVvaKm9Suns5j7brrkQ9ftg1Yy3aYRnw8Ruh88Pra4sNVHFjWyi8utHNvEMin",
  "key16": "gFXJsnRM68TkF3ByQpbPmmaJUU7hkGsh4zmKk8SE4ZLQyABT2NYhC2y6jRn3P9pJ98r7w4VUHgJ1eTCLKmAGQ9Z",
  "key17": "3oH5YrAoBh7qiMsNpTUYXTwjqAzejeUnSSCUet1XRR3gM5a8S24t98hnL2by3gtBgrfbUemQuDEWECe62qFsN1Lx",
  "key18": "1G4rjeh1RsQYGdqpZyTDLR4DULRh4zyoRNDsXmCNimYfd42Fe9AmjBMohyhpwhTyjmMbup38RpBAeLTkCj1Vz8r",
  "key19": "2DYbMc6BxDYkep4U5FxRzkFnjmm8JxzWQN8zHg6g2WkcQEx5nAET54cheirUxNvoUkkmCkqyTnHFC14f7Xm4qU9z",
  "key20": "GTEAmjq8Ro4GJYdinSXxLNJjE9P7YBkgD8uBD13oj7LDno5WtjfDT22YBivwSq7LaHu7o1f7tSeYYSpkRod4iFd",
  "key21": "225Dn6qQ5SCZU3UqpbP86akQyZw9JHH1DZNqJmP8rHBRNqD2WNhCdWLn3RKM3tA6LRRFXU4sFG2cLPmsWCvD61Au",
  "key22": "4mRfxZayAryKb4d4cVGr21MdvjMq9ebZ1ntgkbcvzx2PzNfeQdFHHdpDU58ETyqi4qoZwjLVkwwEGLpeeiCLMjMb",
  "key23": "41naH4nNYARWoUVtHE9hiPhdi1U7frL3HpULabYcD3B4ekZC8jBbT14rm8WyXdzhwMntwT91dbE1E9WkPw4Fd7WK",
  "key24": "2kGUWspDeqM5urwzEmN5P6y5JX9iCVzKaCnuNFJZee2pkJxPSCUYXPLNxp5xswg7mBYn8i9iFuHGLAHh7M72cWme",
  "key25": "3VorTEor1zA78VbharYuHcykPMtDWwLHp9QHUGHnzNheLaSFeVKPhYeuvv9eMMfNDXzejmB7BDfnfmmwkJL8yn2K",
  "key26": "2FaEkwEB2ZBu6ALowSrnqXvAQhz42CxVGYGuPbJ3MojvK1HysMbAUkEY3UxqTp27CE3HQNeHf2Fc5DsdsLmrTuSW",
  "key27": "4ChGerPKs1fcWRNMFfdJvxybatvLumNCQE7MFeEUpGfKs3z4Ak4ajGfSPZTxMUH2yybxS8jLCNtoLdCH6dCF1zPb",
  "key28": "4i5Dyhuxyg3XMvGiY7rqEVAjjT55oWGtfyiTARycaNVdhpXvQyrGt3i71MryCpPQBfKP4t88dcqpvWw56dw8LEkH",
  "key29": "4koz4fR63LRXLiRoAU79PHyM59Wh6BcfSFcEfJQQTjk7Q6BQHHGc7nAV9iZ1qfjSNZ6Xo3M21fH1EKgxvVpE7vfA",
  "key30": "5GyTQ5zDZJwjFvcLnGYt3G2RW61a8y74sHNvovxM1KGKg2hNKzyKFPArwtsi35v5JmjgFfLYaH2K44PtdeLVU1Fh",
  "key31": "3eECNtgNmXBfhZeRqUsbRHrSALFqS2aAyhuqDqYFsfHgF7UG2J6tXKub91oEwnFYbZMexrDDurBM6XwLheYWSNEJ",
  "key32": "36zqQuPev6LcDbpvzJM1K5Hs2ysMih2H7uGmwvws8xHSf4XhmjQnwAKLJix32wScevyQvvw3FjyyGDCyG3a4n8na",
  "key33": "5JmPH5zuzNSnrts4kjE2yAaTwmPENzAjhaKzWTJMHmzVE5PMgRbbEJCRUR4DZYJa7dUuLnkJHz8xmS5Cx9gfqyAP",
  "key34": "2MWCiWY711hgu4UffekQzqqXA1v8VNxwxvpNkjM9KWbqMnv6MRxwRXek6g7uwjWJFasP5mgWQonZT44yx2FwM7Jn",
  "key35": "nfVVfs6XVtBwcoMDEUSif9HFiUxyQhHrYqFdESmhwMptdfbTG6Hxtu9or4RZJMgouk5ZcP8fftWaMUoFdp9XZMu",
  "key36": "T7YqXSzyXjQ9XJQFSd1zSkwKTtZ4kFsYVN2xhoLk7B1aq43i4134tUiYfyKgxhhKpYHiHYtfgoPWaLWuLThe9kN"
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
