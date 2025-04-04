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
    "5ZwXYMzZR6vmp7h7kzvxVQohwH4pXogUfouabKga9K4xjTrEXjELJccAxwhcSzX9PbvwtmFsMRiyNJDw1FPRZTd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wr9DEz4XV9M4MuKBSXHTfa9LhtsLyeJUp8uUUVB3pHh14s6PqrQzoyv8W215WZRFvwLuEXQhgenL5gAbNSVFes",
  "key1": "RHdrhQmdin8Qjmo8s9ToAgXGDkKgSewgmcxHuaFKypTJCSCZdzHqb75oD11CCPivk8turZkdSdE9BRSCUYoDVr6",
  "key2": "2y4W7uW5NTbhmxywejwXphZqGtAoEs2CpK4AVMN2bU4sD5YN6MA7X4TpaaEBtVNmJXkM8yATBiETiKHMLA5PX6E5",
  "key3": "F1WVipTNveN8KBawFeP3T6M2z6gYShtL996Udmb9VsigZeLq252RzQuoWx6eGRvgT6MERG4LS1pquFY78iscx5W",
  "key4": "235j9EK169hNuPZ2YitUsBWPDnTA6ihJsZrH8Eo4GWxXVmaQ53fJeH5FgtAuJLd6d4PBUtnxjvpZuJg5rDePGmdz",
  "key5": "4EosgaL8siFT9tMo5apc4avuFLi6bcuwVvw9vYNS1AMfdRLM53s1aP1rFhij51QTV2tNq5y7hEce2JvDG3Xiiejs",
  "key6": "4VtHMicWNBc8LwMyNRcbcZBrGLV93e99x7j7FvMieKwuHjbGBDEm5hjFbpRCdaUeRQGfYdbw2pRBMs6bMMoDmcWA",
  "key7": "28c43MciupBPrB4xQ4a1F5mFha6WuoEvBeqFhgEfwQCB2dsTxq1fCCD3Fg3XDsEwSmMb4tBhioYib1VdPShdTKCL",
  "key8": "3aNBHMN7wbT3vtsAN5XJsSQuRyBbVY1P6L4qke1vhhvPSVqqEgz74VU6GsDxipk3K3EfXax2xseUE1jt8jLPHhkj",
  "key9": "2rAf9pT4PWTWp3VKj9MSN9bw2iipjz3qALdym6HwktgXc5XydXyBsiQcqpFFeHkgEs9GBfQqSHn13DF8UurjGAVE",
  "key10": "3ufnvZA8pLiUghvnXiUbpx1uHo4vR6HTmYa8JViE4amfjGdxUvwwq5jhfBAURKhTSHtKAr3XwSeiGUYy31utT1RB",
  "key11": "doc4Bj9orLNgzmmnv9k8RVAEjNLz3GfSJp9c42VYwP2fwAyJKyLXwTP8Ek5N8F6Xgsw1VJWkqgbNBDS4Lyg7Zuv",
  "key12": "4keKjTCZ76UhFWX3nZhCggLXgdXqsJwcpFkLWVck9dPdV4T86qvBZiH8FkVhjrZtuVEtFrn3CudxH1yj7tpZ6nzG",
  "key13": "5YR1ZhgBhaLEGAhY2EdkqmuGhCrgDVtuwv8W5wPagshq8trao2QAT5TxPEf4FGs9JSoodEJxPV6xfz6YGJUVxfAr",
  "key14": "5zQLEVGqRRyy6sGkYoH1FVBWSuZKddyanSxtM7kxK2FXqCfrpptzpVhW13Fw8dyRD5r5FYVm6Arh3amfywfZTURr",
  "key15": "54tVBM3PWMCQAscD1wqN2NvxkGS2C3dEEFHtWSDoXoisr1fEDrravFA8gvfqTxp5KcVQpYWYQHMtNs3A7YvriNQU",
  "key16": "5CAEcxiPDhoVZTTg2Wj5JLyc1qHUdZ7E2smoSCzH44xu6uPwAffiu558s8eoe93J3btcYBKiPfA7hktvXyiwepk3",
  "key17": "4HEXUM8mZXdmPc7gcjWJce6AmFxQEdPeqUvbgPaVJgga7MNkssdU2KAbzGtgFVwzBASKs4r4dg6ewTSiC6GguhsD",
  "key18": "3B83B7oYVc5hXPX82jaryCC2jbPE1FL5wMCBp9QphLLvhCpn3R9X7pNyaBKM3Z2pcsfFaVRLThGMpPVaPmweHWkx",
  "key19": "pHXC8fgaxov3E7N1xWonjKkPkWgZGbztTKejvLRjkCD2eiU7D4bV11wj1hn3G97P5MVfBZS23Kho8kyHJBGkpPQ",
  "key20": "2fZufTzr8nFbhgmMH35whsrbdBzEPJeUsJSeayNYKG9p1RiQrjVXG7jkJtP666RPTztRFmcAYkmQu1reAQLUAuQw",
  "key21": "3r7jYfEj3xNsJ6vbSKwy3FhH4XHfEZMEBrQtXnwx961mhpUe8JsfvAwACw1ZAvLSprDS4YsSpdx2SLsmUtgx6tuZ",
  "key22": "2bU1B3hUP2eggJZouzhbV1bpCuF3ZcWjE9XAPjxJET6WYrvfARZDe8pwbmJ94ZcrosSy8isPpBiq8XNqRErcQ39E",
  "key23": "4D6B6BNQfByKEr7UvPNssaAL5aYsiZhk2dfxk8i5spEoGXjMdw7FdHNHFMhN2kDM9wHPtY5pN9gwYvwSydzY3NfD",
  "key24": "3NH6MYjDHTMBNo9jZrszEW2gDWxYChgArVqycNiE9ucJ4H9MRUyj1x981BPQSAncbacRPC2Pj1LjeCYBFJj6vrw4",
  "key25": "5C9bB78PDUubiuNera4v1gvfRpVDa7NqsGFs6WH478gg5n3U3v1RhDkxDrfmgzKMnjNHKSLBcWvSGrfgAcQfUX7e",
  "key26": "4p4XEyNv5usKL2TyCDHopMBQghrniaFXE3bGeXQrzGC2Cc269XGP1WAipxWaFJ6V2Dd9HTXaVyNuSBC3zme4ipKL",
  "key27": "p2rvg5KLquVvy4RLtX4jnt6r1KJm2YegugASbvvukz1f1gbxYcHEgkNAMQpEnDvokdCU3ZTQz6tzQpRhjkNqeX2",
  "key28": "2gv61KVxTNfoziDtgiTzuhK43qxiBif8QpvvueTfpJqVavcriy2txe4TX1Hcac6BR5xKt2N98A2tnNm5CDS2YDUr",
  "key29": "ikTvbajiGn7qVW9s3iZtD4DsAzMREhTT7DPDfb7KcwvkEuvMY63hZTbUQv64uht3NMWWn1nqXEpKMx4CFuzuTeL",
  "key30": "5E4RTpuKU1u2gvrBhSBSwZHboZBkcd9ayizQ5ptUJ69DqSFy11dT24MEFWtoZKUrCZVAJNW9Rfnk2igHjJTQ7rLV",
  "key31": "2AEjuibhymqZCEQ9w3ezpBz3t2Qf5SJx2mYMDuQFFqtSmybUdAWQRSNvkY5Xp8p1yPPpH7g2N3oFWJgwJEDiXFPL",
  "key32": "2CaM1JWjzeTCxRDTpXtHkDuZPrSmuWLb3YBTW31YdF9L9xW4dYnbvYeFk4U1qazLMYrrtxfuT47Yr2BGp37yQGVg",
  "key33": "5Ba9FYE2huQAoBQY8EvKbiTjzUM6LwVHWUpzNdQ1zfhpw4vZDK29AeYbDkt2fyJtGFMtPL4JnhwM8dirQVJZguPS",
  "key34": "2u5hRwjZntH7ATyRGfmQHov5W8wq7Gb12Yuak8Sdac493Q6hwbUmRq9wgrmCa5kykEf7Cns77jZVdLvDvPMnR2Vq",
  "key35": "2btPLbUfePtbaBFMyDR6VPaTSUWmSj21siNC36syi48fRtorsZ94b251mZ2sq6JxhUjkECUmCUq6rodXwg7JRy1K",
  "key36": "3zT8MvQXC3AfBuJ2SGG9c6pB8VqFTkEo2mBeGg9EBmEZgtZQKEdVK7hzzwnFqoDdNi2RZpgGxVwuKHYtrqqjKUDH",
  "key37": "36yUvujSfsDBz9uwcpRmmtwWB5eK86ZBnHms3GqUphEq7VLQqiSMpSiLSe2QwpBSYFBTVPmTUnfd1kYt4s6B9oSj",
  "key38": "fh2KCyGPLSGSVHE1B1G8Uy1YUM6oybxgjyWjvzu7iKTsyApBngNEm8MxyKEHDgEgvFKsX21ydTC67NMkHj63ZdY",
  "key39": "3zmnJFBDGoARyY8C4JsGeyV7oBf1vpSWZ3R3V5vcJLT2861EF9rmUJtHv8YjrEvij4hZsRTEKjinHGUfwpDVhq9T",
  "key40": "4m97hCkusQ1pRws6KCxyshkd3UkFkiuwVeKpzQMFLwtrA1n5ZtBXWs3JBE5bYtiSHmtvsvnBZKSjL2czV47zUenA",
  "key41": "56GU7GLChmV7Dhey3jAEr15wQJHHVYToN14btnw3ZCBRYUTZysiPT393hFuRkJScuSLvska84FS3fM6gNfsxY7Ed",
  "key42": "4V2sNcnszTBSFPBXSzm6ZVwve2Z211RR33xVUC4A8LQUVPzoqQDS13sySXELBa4JCZ8SxURuWxzfGEXxUb5en9ns",
  "key43": "2i7Hgu9Ew3M2y9GnyT8jSPXFrFXgMBqaBT51ZoYdxcFNxU8SxMQNEBXzLtEDSsB4aD3JuB6UwigzSLNL4rjoZiWW",
  "key44": "GfTG9oq2Ej4SEaHngx3hx77wr3jLPtUgLgmsJaEBXV8QUTcyMQUSEN6byuHhmq8faFRdzwafNtA7G49WU7uRWSf",
  "key45": "4eMLh1EojcXB1YWjgkTR9RxCvvpibYkpnukGxX1TBHfcX45gTqqEtmTCvRSYmSpddtythJrkdQFk9RHdSFCfXR8L",
  "key46": "3uSrosRReTmGv5HoMFSG6vzny4pVN7XCFPqD4EXi7jxTwMot5JGhaZ6Uh9DoAronWPFJf2RU4kdSamFQyYftM9Ze",
  "key47": "4LQhGHSvSSj6x8XAFVHaKZ4GMGPWJ8dU4Rr9aXsXWJ5xgVbJFv9gVHT6VyA2jirfNnBnXBB3JjP5w79gateEmbVM"
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
