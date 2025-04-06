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
    "2fR8sJLAYcE3xd5ZKymb9s8L1NUW9fafPWMuWzBLRfH6Kty3PXNSX1zVAE4T3tgTxH18Hk72W3jrTyNR7nErJpJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqY5SE2BzJ5VBoyMUAQSTx2RDPr8aivrWbGsJrE3S7BLF3sQmQ3ankKhfaostW4eEfsHXqCVGcSu9kHmTPV7GYH",
  "key1": "4XBpspdHMgqNZHRkeVBmHrZAxGEWRKaDmsydvhKye1yvP1KtaM4wvV7oubHj9ANiqZAPuntnBHQ5eBzbeNV9oero",
  "key2": "2zKWWZRqPe6ryXp4i1Rnqei9WeSDWrjPQnLzz35Dg1xHbeyHvfcLxHPckNQtrjbSmP79FkgJDh2tnHbosLG9phfQ",
  "key3": "3SK39brrKfBffh1TC9TBsTvfNnsiGh3hAjk3quqqSwa6M2UnzREuwQwrbdwodm3Kp36GthhHX8sErNLxowR9hca5",
  "key4": "Wp7APUYDi9fzj1sECxemCKYVPZ69yiMEfXUN8JaGxwGdr9Bzd2ZgQALiyA6Zf6HC9med8jhJXkohEddkRU66vro",
  "key5": "3cWnhhPsWh8WEvjTr9wtw2YjZohng83PgSFiNhDuxzYambUBuvLCUQ5dNCfPw1LBre35SUNKyV5GDLPvPuJxsnPq",
  "key6": "2evtnuaXVfaNzpn8qvzHje2D8wEMRPTKjjjoptQj5y6rwVjJeCjeKWN1huBCSucrvfdAT7TGwh6k8BfVjakFyiXG",
  "key7": "3ULPan2KEnHHHUf25kX6wi2XJSRBnDA13sKvNo9mZ4CQ6wpwF8si38bRxS5bSYoGyxjQzicaFic1U7coY6VYbgct",
  "key8": "4oupX5L4NfwF3qzN6QPJAp24yGoYs9xubY1rJ8MMHQAiJcqJgSwZLviMsZ4L6hQ7CdRtfJ7aVdiCJbYoZxk9h3eS",
  "key9": "5gSM8QR71tLfuqoWCcKvQruTj2jy9Y84JNTueTjAVi8vry2v5pVMmS1gw4Zadv2bzsq4auLhxSWqKeaR7PuPTFHj",
  "key10": "4H7jdLatkw6htEpb3jjVk8UQUHCWma2UCdWZHCjVfEe39XktbT6Hghhn6eM6qfcHefSsDmB9rBUxdowQU77ZAikq",
  "key11": "58iCvkAoXaYh4KsKiqv2n2WJacpxUUiEBDdP5KQr2H9fYfoPCT6B8e9XiShKEAykba7eC3UdMe9Hxkd8iZXwKrQs",
  "key12": "61fUFWiCUZXUr6F94wXRH4L48vdSj14iHV3bBpWzWRiBkqU3u9RTTjrU47fCx29NPtThE9yA6MYmRkdkryX8mkvb",
  "key13": "2puQfKGqSJaTAQeHgcypX88CdhBtQ5949WTExiUw4c5vGMUMjR2xhfZN5aN9Zp8zQXTqM4SE6aijR1kQoqdwcSs2",
  "key14": "254hBmsbqs7HksZUCDCwQZzgUgBdA1nijdG4xxX3NbneJ4t6DfumvJcyf3TsAPsoL4JFbUXhm6qM3db4FNBww3Le",
  "key15": "3iQ1g7sf3bzq4ecXzFoMa9cooEaKA2i7yt4jxMx2rU5uEySqr869GoazRghMZzasn9D9M4pa1oFJMK2gYJ5qQRBm",
  "key16": "GnvTkxeBvr4kEAWNL1YdxZV4k8H62SWdJuBLJTkJe2xGmKAdnqA3PUvLqtp2YQjhE1732dFpLb54rFDcXv8492v",
  "key17": "3syoCDrCa37TEEKwxezQKBH7Gwyyn5qVcsxmRXEHkswuRZnnSDDdiJPpQTAphQa8cF8PcKgF7ngxrAwVJoh4KK5e",
  "key18": "4DnR2Em3J2zyDtEwok5RqHC3zzhSgF5SUSEyye2tdSxBX45fYKtX8Lob25WuuMdiXhmcUv2ZgiudaMfVQWf3tHJT",
  "key19": "5hANtrrQduHmQacRfw7KA11JftDAsKavN73hE2g3omaUiFiVzJrWydrTA3DRHngCtLmd3V4kNsHpX5tb1c2Qy4dV",
  "key20": "5iWC9okRBMCHfPdFoUCiUVBrDB3PTaNKoCqCSgSHqGGToaAoRWrZ7pTVeZvGdvwHGDVHeahoEhUKitE8L7gGRN3S",
  "key21": "6BVooPyf5MYBR3zuyXw1YikZzcvJYqJkJRqbUT8i25BsPcDVmMEXDyMuJg4m4TKNGyqnbc5NnNsTvHBCj11gaUn",
  "key22": "9x5sm6DVq8f8ohQUpmmPtFEy5Sj66hUDYQmPppUyHqYbSB9uSU2LfcAjYLntmfNa21JmQthqgWEXcthjzUzP3GY",
  "key23": "41Ur7Zkuip6dd1AwNTmJAHDJK6SU2Fz1NLSy2XNBy6cbXNsCZMuwv3KDMEuBkoWi1FLu5NXmiYh62yAGV4UdVUSj",
  "key24": "4nNGNqjdwi1DwyCtois6vtE3Xf2htP9zRtW1eyGrmbYA2szDhaixpTDxGvkJHs2RuaPg4WiaEvFzodUsyju5bBtw",
  "key25": "4f8oq7AayfjSfFhbWrRJa2m1tojWkyTD6mKGXSs6rtnC1t4QC9NkGTux4b5Uo1yttBVpKoeC3wBzPAGKP4JeciUm",
  "key26": "4MHDdW3qmNRbxPivKhFRpJMRJq74LqRMQLC5ikCgakMGE2DbUfWA6uCvYAceGK18Dcf6dGvWdrHV5d4y5vV8xKK6",
  "key27": "2bq1jCkEx18SKAD2x8cQs1RrFVeALPyKJif5JvYzTUMnka6VTrJfLGjTxAvVqZYPByZB88Wsb5RT6CbT1ooEGJxY",
  "key28": "2PZZUNeu45imXgyhuQip9DMBbzKzUhHywXArEph5EwQ9b34mapaW3jFeTV8fpJii9bKfWUrSpi6h6nPu3ASTKJ41",
  "key29": "37fcyzPfnY8U4c5zZmTS8kL6gJcyVTftpNDoNLvTwqkHnRSeW5zUSC3adAwhX5znbzsrJDqP8beb3xBoWV2CHbiy",
  "key30": "5XfDppfDeMBij9GAGgyPdMBsoCzHCJSahZeHkzYQDz2Dpr4QvQN298xEiAoaRf7wARdY4EFatvLndWWBEEGnHLeQ",
  "key31": "4wA43GuGYyEwRVSThXNbgxJZDhdhWxmC9m16BgQbqHKtrHLBFb8h5kLLPij1JxUWJsfSJ6oMLqwDjSz6iWxaZoW",
  "key32": "UD2dUBQ5p5W7DP5RTGbqgBmQ3Fg4wmsVEeZVeNU9sNd9MoszRmAZQF1DLLBTGgiVe4FJvQMzhNtyRsnVdi6RLBQ",
  "key33": "RKtxMrSSSfS9gTrniRvHwbJXxMvz3Jwf59iN4yfs9ud687NzCX3fFf1J9rmHswvTTdxQ9c82axypA3SmQ2SxARh",
  "key34": "F4H6ui3aWEiCBMM53BtjnmQhfJYVMc6rmAP6hC3Dd758jTUhdZsCg5pMpxi3hBZixaVY2i2Tw3AsaRjfoFUV3Ux",
  "key35": "3TaR7sYoMyAvyfopm5urUhTAD6Fgk4xvdmqTjKz2QcHLJaN48efsoRTgjkrNVRT82asGF7tu64waBZzoQNUVPLCN",
  "key36": "2Mhe6sFb7duf83Hf9yPi1mVg46xWPVqR6GPp8g9EpCfNLHGCQLn6UurezhnNKxYE79myPFPRMf7G9a8ZegyvQsxX",
  "key37": "2JaRBerRVvxF1Vzh93RKa4QH1T72rPrYGmuYf6pgZLUCQUmmuS5RGjLx67NxSmh67owvebrDHzYSsDUKwhRmDQ5N",
  "key38": "xWCXkuQmZ9yNzSGhJCzw9BTi1stCzTg9t9hRUJ1QYfcNVeYpCTkxFEwqd5ueXC8tkQQvAKSZraNW7SbXjPZumkH",
  "key39": "SfmcpQ5XMNh6Cq5ZgXSrAJaVEJJKNBLn3BFJ62RP9DSknopNue1HNTrYmMsQyc8AX3mthCnws9inuLsHw3hVX6q",
  "key40": "52LrxTZhXRz7KeK5A7BCV9iZswD79qjDA3aGH9mG24UKJ7p9x9rhjFo89JDnRRXSuLEmKrX79pCweQvZURmXUSub",
  "key41": "3PcyAiYBpqjYP3WVmRCTo7UMiwpZCYxGN4JWfM9hNYCLMnnUbVN2UVVRbbFFPqZkzr3kZpno559L6uMJbNW9zCPu",
  "key42": "3GsoC2w9PFT2pxoGw483fv1k9QCdqSbdfgBCXAthvY1PWsZazCX1Fi9HhcjedJWLuADsnhxQqW7iXJZ1keKtssFv",
  "key43": "3Vjm8MGXcqpHe1GFJKZfs5WjwxkYvNtFaXcceBrTf1ZZ3XG2JhKVVu1n7Gh2NMLPMvyXnnjBMP8H8ax4TtQBnDmi",
  "key44": "2L9Y4S73AdUL3CXY3nZELzpc2C7SrnFnBSXFh5nyGsUH523UEDtXvjGThSTvqk4FYtnAeU8fiYAGYVkYSfHZFZjG",
  "key45": "5vmRheMWZENV3Ca4hxo3UbiFoHFFpcfYE4213BiqaXEcV2Fv2CLEbQXsHBi6d3tYsFPiPsrQNw5L3tCVhtDQuVyH",
  "key46": "hyocjPPJKvqLfpW9gSz35rCJNDBpWCUFkLrYDaEyahje9aSzw8twEmURnPmmwidp6A8zC1VyyWx72X3UHAVi4wr",
  "key47": "5XaCejHDh3kMQrSVwmwNZF8xLi9Nyaj1V93tcghDqEYqJwMBNsB1YxZWUTTogXch9VNVpa2jV6iKN3vAJHmEaob1"
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
