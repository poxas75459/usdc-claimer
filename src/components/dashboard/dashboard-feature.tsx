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
    "4SLgnYmuEZmXUThjeT3soFpd2qEceXbpooPfyPhis1Y9zWTiNfJzQYiNGpB4f39UTVuEjBVkCfULEXuJATzH3mv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDL1xrrLGaDTPDVUX7JHZEqKkjj1LJhtj2hKnQaVYU4CU4avpiP9jgU6D661EmSiy12PeDbGufuyDZnXcE6nX5V",
  "key1": "3KXjmWZPHTRTeps1wWXK82bSZfc3GdGnzn7fGkwEA3YYZ7J2pJdhsoVcUytfhYUXVSkac6kd4xaTKk7MRZNt8cZM",
  "key2": "4TsXuGFJ39VtnFahPLZBRReez11bkQQsmvtdbYaSggsCU7CcRAuDN337RoAFihZ3yoYhdUxaxDfuy3LgJWmdxhgA",
  "key3": "47TR1pCcNKP43TPrxKRjEf6F9ifkvAcSaNAkk72cQwVqHz92kjnxdVyfqgRY7Q2X3Rw5BmvoWtAiMzdyptCXK3rf",
  "key4": "tkCJvSYNGmCAh8QoJMWv4jBgTHdoWXyacAspnxhrWRCRbH6ChEDNiowmiMQ8okXmo1PE1qZ76XB6ekVnezbKWD2",
  "key5": "BVZhKrpgDHuf64x4CVKQi1xsEXTaCLUNjXYkbaMYWmLxxAtNun7WGotDDZSRrncW4xDywsT75HWqT8aUaowAvHj",
  "key6": "3VmG8H2F9ViUXiBAuh6Lpe1BDuwLKxXLz4ahLJdTCRJzpJJjkEdhTMYXZ86PrDCGRArjcQEe2K3sDsVfR6KQChA6",
  "key7": "66QL27pWkq8cbW7io9pz57ugwJAhNWwAcig5Vitwc4N1fBocEcEdT3izZVwRwSvSPXXeray5gcGKDdY4BfghbzrT",
  "key8": "5xZnC51L5YUQeMP4DfWwYGNcmcQ1ANARKFfMT1N9jWDLNdLZfeGe8gB81W8Gms4U4omKqTrvZPvhnJFbJ687xrSi",
  "key9": "4X3PBFiZ1UeJELhw83Uapn6egjqhzD4wyHvgp4jBnEuHTh34fTNFQJqBKYMVx8DNV4bqHf7FWK3P5LFwqbQ6coyq",
  "key10": "26CPBKEYtvHYvD12Vq6TrBPMRHzu1f9ATE5SmAGqYc9y5jg7MRTwKprF7NiQigq3jK2tKe827cXLRmKQZ2AMJVUn",
  "key11": "3S499Q6dxXrjsWb8uW25oCsJ71BFcnq1ZKDj7Z9zTBtLUrKC53igA5FW96woCuMmFF3nFYyMEQxLgXdwUmxRTiEo",
  "key12": "2XNCV3fSdyQe11e2DLqDA6gAU5aHsAfgFF9TcHBw8nNV8iMwWmSraoxuSopANtrhKcU98JiRLjuJzAa3JQvFFphf",
  "key13": "3eye9xrqW7MqZwcYReKczefgPjTF6cM2ZjSPqSwtSV7bzT1gP1GYo13j61moEK1qY3wyoT1He2BDnBRUSEj7QHzr",
  "key14": "21BYYS158mL4jdoCG5TWV1Y3tJwGJ7CNLUDgm7ZGLX4haFCccJ2vVjDbkeSEqLFrBeWAZZTjDXTTqaoPjxAziEPB",
  "key15": "h3GvgghdVLcFFjUFz6bwqPXKBGReUMbKxwCdr23JGTArH5kvv8d2g1ggqUpfBXxv9NjLtKtzQqGdcDEXx9trVmJ",
  "key16": "5zpB1B2sswkRrcfJBJukAwFBMvkAeooVbkYtZWgxMdhRhJZgjGntDKCoSk8yCuSnGatPGfR2EMBnuaxq6LVsUuue",
  "key17": "3js4Nkj6UjXJLcoHFPGE2dQXCksv6QyjufzRepRNyCXRTPMcwrU2ozR68SDZhPAqZK3wL33koumGEX331evRwgsx",
  "key18": "5wxqwfG5DhhSWFCjztXLmWBgQMvUZQP1k1bUJ33tnJ2qLqmP1Hu7w2gYYn2rZkm1nQYDHHQKsvAFGPAzgV8gzSNG",
  "key19": "2BKYYK34tnp9oASbkeEQHj4QVcU4bnekkhhnZ9xBVCzwHy5fScgKDXjNgMZ87Pood1M2BASp7VYq6bbnuTkho7Hq",
  "key20": "QbRSoMtPBor1Vxdmq64FWfmxYNWUJkuefpgi3vcpthptErFjRdtQu77zy9fWABNPu2qJ2ogJuLsZBtCPzVHj7Dx",
  "key21": "2Rxx4WMmpMRjSuLDBTCAKGsziom8fkLhqmwzvCHuK9jD5yXYD3mtn4hwrJvgSvFL6CpvsKqaDf8pswu41EvLPXxm",
  "key22": "2a4HrHpuvLW3N4dU1DY9sRN8DbzEn2ouTPyWSBHNqpGbicges7ZMoAmAi2DgfW6AuwijfaKMPS4ZCPCVKznQ11FJ",
  "key23": "3jMR5trmHCv67hH4YRZKh1N4Kg6JNW3JQaCCmJANT55M9ezTxJHWqgjAMMvsKs768BvJCxRZwh6bPT9FCPzjYoNX",
  "key24": "3WoB5Ueg3Ato6Hcy7B4cbsdBCqENsSKQCt6DPgAJB15kXmeyumWMMc2mP2FJfGMxXAhG4qLpmYhZApo6NXyLAEqj",
  "key25": "SB16N7KSRXgV6BQT64dif5ugtd7ffh4HSjuSQYKpn2izoBY2psEXVtYGdzyJW3CnjvwgKednHxuQTKR5sAVwqoX",
  "key26": "SNQHDwWfR2vCXPvGUTF21B7QnvHFwtqpbMNgKwSxJ86tzJTJ77mL3BirrZwrg6JH4utVKtzt4NWz5ww3S9rJnwL",
  "key27": "47eQ6ve2i4h5eCLBcLdDH3EDwSpUwJhiqi3BQGoeLw2R2W68cQPTVqMd3yu6Qi5LKmPbdxbuBXS3CAaNFiou6GyK",
  "key28": "2CoxDZGiB3m6yYWqNW4bRGkmFioKCMoHArLivz1nFqjjdn4Mu6JJg8AQCwgPZ6L1PzxM8fn4w4Cukk1jBHr6aG7d",
  "key29": "5foGug2kjLTUfN8ghUcysHuEcEVTPcpetVhHEYteNFXtuo4pkfqBQX1K4WkXhF55xeoNkh8gBDt6w5PBnrucaZJG",
  "key30": "579KvqTwxteywGkxKUjeCHyR3Mbno8zrQrtA9eyHciPZSt8XdzsoGkUThtC5tYpXU4ZrNyeqnD3TiCkKsjR5N79R",
  "key31": "2mRBMtuuYVPtbPZd6yyTAipo4JK1VnK5jW53LbrwyCUFRtUZwXPGa1B9EaTHUJNV4u9LqKoFTuNavD7PMCnMuRTF",
  "key32": "Q77VhKTm7FkdtP3YqsBUVtA5eV9GWeuE71CtkTSwuxQQnxUTRyLPYe6GykXDwuDAU3qF9wpyRXV5bNo8FPRYWmy",
  "key33": "3GuNPe8rWBryvci6fKJDibkz9xZpCJs5UiqPUjM2VEDC4QcA7C9zXj1XqXCjoTLU7NhxgTG6W6FJ98UagYzDXJHk",
  "key34": "4eAHFLVKdaYQQ3DSXKc7EmHaFZVTDjkfr6JDtQP3igQpSbs8mEwsXpRax4MP1Qj6ANSjRG8giZPL7Yw4xaaDDpVJ",
  "key35": "3bhhKszqFFeeHuJQGTksmR84u2g5s74DnVqrsoveqpCLVV5E7wTy5CmxVGtTJeRZbYgtyW8Kaiq9jf8zqVf7yXx8",
  "key36": "2WmoJ1iB4iSrgknvgujiF4AmLbMriwyeXMhecbLXy2Pk9Fw94EhrDjne44U7bJb6rK9m8db4qXz86G9ZVN9U87Xj",
  "key37": "2FXBYbqkyCpjJ9g8KDnW9vMWjtbXEsbvkDQaatgdSbsr2exZw7utUJBJD9NUjc21nojZ8RByGVj13crDBn6xZDys",
  "key38": "5wE5QoETxUbgaZicHrZ4VSaS6EBNxG683LcTtTR2K1PiRSiCM9Godwaa12TWFjCLkH38tT8FusT7irSTMMG3Q3BX",
  "key39": "49cym8JE2EbTnvhY6RnqvEP8s9w52PssYcduNBma3yuNeaQzR7vLzvw53Qwr452mEyqiXdUEa8jHGBp59YLoEHrB",
  "key40": "5J9ir96Zta1aYCvWEoxAjTWoqvTQ4NqnMuE2E62doi2F8k84RScvaEXxjvg2ErrJupNYdtr7bwpD2SeZMMvK4Qro",
  "key41": "4sNdbPeTYHRG9xTWbdCducepwfpgdn9BVJ5rTBQPjm5RkFXVzaU2cz56pkrjqwac13uyWpWjtW7kpJduefpveJPZ",
  "key42": "5F5zmxxFLECXYkjQgmxFaoaX1gL9HSMQrbtPe8kKbavxVkbpYJdsrg37UkCqe1nNchoNhkvcoWbh3ZtBZ6pier1k",
  "key43": "waysviML3vmSrHYGtZJ1sps8u8q1j3vmp3N8T1eKV74Rxwim7g5CH2rqrYW4ibDTqscBaVd79U6r3dyko8onJWu",
  "key44": "4jpj7YZcTStM7E6vqL7MDWpAS5dRAzL2Prvy4KiRm9Crqwy2sNchU2dDg8bdyfxjMS5iXiTacKakro187NVnBbCT",
  "key45": "2RCgQBGBCaNkwFp3gWgKCsUDPSBz48K8Fv7bkiw57bVnBi4a18GqDcddUJDJxyCx2jSNCgrKMYTjt57fkZnLEe2Z",
  "key46": "3RcGUWbr5zH2KmUUuL3UVagptfXrmcZGRmfT9mtZ2GKfHVMbChmKfaRREXW4qY3yK2cJRtJGYFoXCUW8j9vKWozm"
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
