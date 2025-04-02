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
    "3ttt1EkNiAV7YJSbNggfHRJezSeyKZDyR4dh7jGoiQNxc3JhXsW5XTFudFLJwijff64U2htPc7KZCjiSc1e8mufS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jE85RaN4KtTdo4zNoSSthxURsKyzEgQ5de8ksK8P5vRhQTVm3ofYWH4asmHcYjfWV1ZufMCTojyDJiQuogSJsJh",
  "key1": "4YatTk6inFWepbccJP9NfXngKzZUrtwbREETXJHb2KxgdV1ZweQTNJTpxQ28gRM4vu7H3sAZqyF6tVucYsW7kkwH",
  "key2": "3MZgVosW5xw1UtZvgi13bhSAQDU9GR74Y9utJyipigM2Tu4G3QLNo9FJABWZJx6p93F9pUQwVLr5Nuuuekt6eHms",
  "key3": "276NpLiSMrV4C6JQbwjWFq4b6RxdFXE3fT7jSvCcr3fc3rh361gBBv1K3fgaoA59GkhszfxEqV5v2F4KEAFGydxj",
  "key4": "2HU31R8TTvq6YuPzvDtvShSPyENrKgyTSiNMPPoDfhcpjVaaXXs6914CeeJe5Ymkk1WTAyLTVEvza1Vy4sVyieAT",
  "key5": "3bvWYyzbLhs3bFMYwPqJ7pi22Gf6JvCnEpwcRbRRea8vm8KTT8uwwsrAmccwtSyrSFHt1s425cpJvnm7Qxiw7NZe",
  "key6": "4Gk9dPMQ6FCQer2YAcbfmpewz589qNHdibLQyHfJhRWq2hFrGYxz5frvCa7hS46fKoxpRMycJfB98stjhGMhqTK",
  "key7": "27F5fMKT8m3XcKfrbeM1qHb1avRwxd7jcqDedSZJghyiH9cDyLvVcELSibXzbD1eGMHyTyG7bTVXMcpBfsoBtf6M",
  "key8": "5mypGrDfCBosz6xzApA2os6RYxPFzCAVYzuzhpkFBFWYtyWswk3Yu9TqihsvcQ6BHfHNwoaWUt6A19rhtht4S2vK",
  "key9": "3y5rQehKUiixU1p6owuTSY19ZYtJAZnUAszdu973t2RB3M9j11E3GR69gLCHcuiF9LyMKQUttQvGKxE9ZQCTF7D9",
  "key10": "4ZeuNwupvLbazvhBzvuGHWu3FxEVZFUKbwebPe7E9SdrUeP48DUF6E8ZXyzprkchAkGNnhMwkzcsqArEuiCme5wa",
  "key11": "nj1ksHeuNNNMNzDpx3mZDnSrtTTAMFTKhQxRVdYX1CSsP5JoTTmvm3rbR6gEyojMjrx7tqh3wQBibeaFBkKsshr",
  "key12": "2EEAekM8K7cUNBXuFNoWvZPn4r5VkePg4ggToDynqthCSium1BmBypfVtocANw8nMW8JmBYQ3Ff9eqh984QJ6F58",
  "key13": "5p96EfzaYpyckLaVMZLenV1pJAgb4dzR3akNWb3DY4qroYFSdv6PixprKiuq28ju8SPXzesWFGZbNCeuNxmv4Q2t",
  "key14": "2z6CpSRPST7BEvc8cQP7aTTjiGg1Y7uKHoNadTW7Nwj2c1LTcvU1TT7PSUJCf89MExo7GuDaxbVTz8xBQBqahSwk",
  "key15": "wW7iKnhUtabUU5j32gRDbWuZsHbKUAFkXbBG6gSyN4oHdJFH35HJAHjDg4oLUtFJDPmxjPLu8WFP8dQpwKWnop3",
  "key16": "5FAYXUaUc8v7kX8d5x27Fk93jED2zV81JrKkT5ohKy36bwtUVQYmMeYNLXzaQ9phb2gUvTSKLiYASdoEvSzhGGJi",
  "key17": "5vSSpe5wZMovwFE4ZTnr1ogca3oqDurQd18fvuE9CSyU6sSj7A7D1ZF3Sh8cKMfcHtmQVMxbZH6aZZQBdcrxVWhR",
  "key18": "4brmXDwW1iAdKoZvzv9VSFocYhrdX181SJBivBUdAcuAUHaNd41NUNKPcg829b2ghKw6BVRNMm5oW82QytW4S95s",
  "key19": "BdKVfYmuGf1ZeF4Cisyw27nxVvYhtysAB5xytdcUkZ6ngZ3A5v7JXpHY8i7d8SU2mWnaiucr6Z1vctjKiwNZ8nQ",
  "key20": "viGTn27bjtqWZ3PjvpwEGcKjofeaJnfWpBJ4UdGsiaQAFGNytLE6yWbj9XyoiJacY988d41o4EdppGdWjp8HfMq",
  "key21": "54VCasTEiusaW7d3PB1JKM5NWSsXnR5Kwiw5uQ21VHSDofJ1BBvWQn56NqZ4bEdaY8v1vjU9hUyvEwt2CQugezkR",
  "key22": "5m9C8gG2cqFQoLxYXDrJpaqHoDfD5u79rjGSFfjHJYEXsvPvpdhf2vhX9y5wGmVmuTZ47XDuJZvkMX1BUSNjpaqg",
  "key23": "Aj2X6MLUNtU5eAY2GHY7CJJq1PudVfi6hUaq3hSmqsuD6tmdiNKzHrijtZnq6sCZJqyriMvTfYHjhsvQSVwfyBL",
  "key24": "2eds7gR1PgEcg3T7mMqoMKt8mQpjyAfdL8xQpQwrAqqMGdAByLYK36QeZbie8z1LA4MXXJcSMxSsrj4KRSqmiomC",
  "key25": "wbEwyt8rA2c1LL9FDPu64BKaac3SwQtzj3MFYoqtkDS917fQTc3HjPSx7NC1fQWBKhrMCUa6oS4ZHKmpAE1x7Mk",
  "key26": "hFPwGZJDd9ySUsH1YenvorGXqCWWr3r998HedDxnCH1DHVS8GTUMeybmuDDgDPkt4WH51YAZLVCHyQgiE2GsKbn",
  "key27": "571VKWL7ccXxAcY365cShvSsydqSr8vi736bD7FDum4Nm4Zb89dN19C9NcxMiDPugtK4T4AjsLZjXaVG7A4Y6b5H",
  "key28": "36M24sVJEhP54qRY5Jsg3GQMjREPfZk78Y3EgL7W516Cyen8tLkycnQWM3aEt2tEZKYi63HN8QnjTxqwQtkfH9uJ",
  "key29": "2HRdpYrSeLzmM7kbt4Fujfe6vHLRj1W3oTMxCW91hSoFDCX9NQcuQKYU4PuDCaq9FBfbst8CLjqT8GNbsCgaWPKd",
  "key30": "3dEMDN6h5s7YbTv2ixhvAhqnomAiD46qo2iKz3R9qpijxdi78vRYrtMPYmon3wt3daBQ6NvMzdkFYXjYqYG8zWoY",
  "key31": "3VPnMpqd4Y8NP3uFP7Ni9p4gXqS1QgThpAtmvSiiPbA6o66qg8pgPmbocrU5yerBQaPMJdMW7bAL8XLoofyZmxQF",
  "key32": "5F1dZ3JQbFFKJUw7H8gJ72fpXhVVuHBjryygXB5DShUXLxexckjevZbobzviJge6jd9iiQWL5fWdTNDTXqTGEwdc",
  "key33": "3SibD6Muyu3dRMWkbqNa7jjyFTTaGZ2Aj49tyvXD9thJTDJYUuvm4rKgUaZfaVRPowSLpwuGGVcFXchoPLYt29Ey",
  "key34": "4ZVxKUJCXNXBhBYBzprQHnFA9b6XpuHMy9zFEBbAF6iMNtAbkuhHLUCehVDMdXFMheD1AJGLCKAQxib2wZVd6yqk",
  "key35": "5ksf1nSEonkBKw6qFibM37mm2d5fsdZRHmZRCeiXcKscRKYdA1Yovi5xuNV2E3ULfx8ezZntufeWZmPN2ADxkHt5",
  "key36": "4k2tW4vmj5Zo6goEkdeYQpLiCqt6sTSqVnq8obQrEzn2txMYMbtP6WKZxwk9acEvmDsNLXqPDVNpjs9kSwEFTZo9",
  "key37": "5s5kwePBe2Qf9fbJYbWX7kD1LcL62DFxyiT5rXE4JFs2aZ8NV471zKEFnMM4piKzZTQy1DCgPNDqHhazWWeviKT",
  "key38": "4kLtpRJh5RooDXUDU2t1Yb2TwtBc5Xkua4Y8cAE9q6RAj1VV4guKJMNyhGAgnyuS82cuXxSxuhABJwH9BteF2be3"
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
