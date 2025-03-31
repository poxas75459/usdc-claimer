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
    "4Afe9gU1fb4G8RU8vvnvkeAPP6kSHNw1xmfUkxmwLs7aQHgps5g2sKbHJUXyGTKCvKPLCNXm6DsgnXMVjo8CFzQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62WtRmPKX2JU481NY1DSg4WjFDqofGZXciH9RCCwKCod7483R1mtR1z8QStpYfvdAmRcd6A9s3meSsuhDEmNutG1",
  "key1": "2vfgByfnKGBcJJTM8c8Jv7TqDDLEkVpvws7QKUxfeMP39E9ZumQbeDMAsL4vGpeLbXf4FUtxX8cSggWYZPLw7MWX",
  "key2": "4wg4dzz6yLoGBaR6nkywHDLCcTybZmvqzUjpd9agYbkkkaDy1QXygiFg2CUL4qrGcLPJUiepAhT5JWpotaj4s9F7",
  "key3": "uuKarQcRTBKyhWm8yPLKM6fAd5Pv15tLpH1UL9MwwQ8cYiJhpVypKQSShM2FZrbE2S1BBQRb8w5xAuJYf1v6g3N",
  "key4": "5z7U6d1EktLWxGT7Tb8YwNDeRi8NR9tVgJHucVWbnTKJNEMaxJxR5MTWqF84rCrFaH1fhjRCQ2nLHd6m9pV8u3CR",
  "key5": "2pe7mpmr9VThs7NsfsaCjzegwNhqisUoVT38ZDgHEhHtvNMzKFtukCFenyPe8xfgS3BE9NceQwNx1tExdy9RafGA",
  "key6": "3m2x91tgXTEWGK8mzbButYxztFUKHhorFw7VTiYU3nWXkRZfH23qENDjEWCe6WGYR2365rWgGL1VqqVFq6puaxaJ",
  "key7": "4BAUA1qxGDYHsZJQcnTpuyw8qjHyJ8sBKY9AcauAKuMAo7xaCmHRpiiwQTxsCHyRwxH3yrThazrUJiez19qroF6f",
  "key8": "4wJnixnD5ki1d7ELzyrdUnaojW4TK8iaRGo71i37NsRKwGARDthdc8wXRW44msFYQm1hx3zPtinikg9X3V9F1dKn",
  "key9": "2AVtHVPxHuSKG3TdpspryxXgR8MEiC8BaGpFUQrB3ExhsWrYXb5iAgZd7TpFVMFkqxddezdLCgcxcCEgECvgwika",
  "key10": "4ZfVEaXcGoksVPT7LJiMQyKUXQQd852YQ7yZQtPP55QUw3T95byPXdnUSH5cmv3654914PT3Q933aCNvLDPBEaG2",
  "key11": "42iVuF8cghCEMD4Gwc6k79GBx5qy44kuDQSAQTBdvWVUrn1yjZyhdfWreuyXpcqr6zdxU1amP8yWTLdwcgeR3BNf",
  "key12": "3JZSiww1veS33TzcAZMsCfjm84gJGMyJK5io3bhn6GHR6mZp9Dzw1vtr4WV2FBWKcSfobnec1r88eCzmj36K31L6",
  "key13": "4WSHmKdvm1WeStiPvGHqAQnY8Bc5WuparsCtWzrA1k8V8rzksymEiPGJWLHHLra2c1aCLMRN5tCCseiKC2o74oUn",
  "key14": "4k7L8RCuP84juP78E1HUCMDnb2YSP5eXaVBNDwy96qDfkY8SGVBjxdUe2wKPg9vHBRHuUma5bga9cey68wJYStn9",
  "key15": "62KFKZpsp5yn9h5khLAWM6iLr6x7tS9EXaDry4NBf3UBv24oFUBt9GzjjmstSoHN4bNHWaXa1CT3rSh2vRCVEAB1",
  "key16": "57FR57NJK9cvFsu4axpCKKJtDgLjToNWWndcXBrB8ykpbiaQKtTsa74EmjXYGN9jSQuZkzV7Vve5hsKkcmnubLys",
  "key17": "4JPHFeay69tLZqmgBRnpwBD4mLVTyWEAbhUjQBubXAQmQzwnFAyCP8tqidqCJSTkp9XQXBYeAG6qLoPeF8DqLXhX",
  "key18": "MU1hTm4b3E8a2JATMssiTx5sa9DAMRttmzG6RQUZW6QEyuYUnyG6sciUeHG2dGHRegvMGGBiGpnjnuVP3DGB4Ms",
  "key19": "3e5RWHzTjmmhnPFqh7ba8ds2niqBYrRgwee2JKzbrJuDW8CqEb1J5DPajekYULoC27K8RREdVMzmBr4gknT5a9Aj",
  "key20": "39DUGf2AHmKvBL9GgZ86AdwieacMPULhTgCmYSkw2DhDKNUyLRsFnESAYko2uUcxWPZvAx8DUVNw2YVVnrAsyjey",
  "key21": "2PHw44mKJNzbhuCbrd1VjLnnp25eLRz9zpR6Vq3SrRxHKCLRVVepzsmYpofbXn3ybKPKmVJLQmUL92rFibxbujXn",
  "key22": "5xk65j4vzKj9uvUwU8uhE8HR9FcsNBFD6c8zMqbfMP7xywuGFDR3FEJVZWUfQDVFo5ivwLPyavkSQrTFB9m3h285",
  "key23": "5mh3fqyFVy4WRfiJC6i5etWimQDwDZuoz4gGeae8CoHRDUkURkg4ZvM4uCDa6vqjZTADLHuCjeWouoWYADoYBRSq",
  "key24": "4T37hTR26mtezcPFwJA54LsZnzGQxiabXQcEdRRo4XL3ECaXjw217rgnnWkXRWerTsG8ZisAQRgf4GDpjLG8kNir",
  "key25": "2ucNKhh1AWdLag8JeWaxhm4BYKS5wva7bTgjUu4uPtNwJ9oy7UPVDYyJXdQYnoMudLYf8LYe1QqTU6g8LWesWEJM",
  "key26": "4UXxgRWLz9GUwjgdacPtvv7PbEV7W6Gui16uKkQfYnczj8bWdKLqzqjsQFxrYtryEAMrTb9h4HvDkG3dmB39uHUF",
  "key27": "2NZLgex3RpoE4KoSud11joGAeBd6fwg6zRUseKuNEmP4iLGAkudMoonyA3wox2ZjC8ytRhdBBuJ97BRgchmVBSQB",
  "key28": "2t87n29mBhH4xbBRQdYgU6P89C3Vzko9dgATWEr7ogq59HuHxDWXDkFrbHhPkDMmFehp4nzEWWuqTHhC4roXo6is",
  "key29": "2eYFCbsxBFTRMe6zJosRfHBUgtx5pCaPMssb63XSeWPX5GEspxj2NEjsvCC1B9DMnXxJ73ue1UuvtuhQYEdLYYij",
  "key30": "2hMGqvKG4LDvU8NLvbbj6fruNkn58XZLbtDv5cJ9nhr4WHRBdDUMB4RugaYCyNo6HPRpkfwCWxL81qq2nHsXpFzc",
  "key31": "3qpBY9nS4hWn8tir6bhciof45Sco6cbjwej7Pohqu51obEzn5kLt3CjKjmG4ASGYSifnU64JPyJe6HrcKesZ2zNM",
  "key32": "2hSRGCbekVqnMQwi7dJHPpoWaM9Y2oAGcQNJDwS5FzqX22zFv5xUFkBxBo6wWtyJLLendZY2ESDrGW2Vk1BhPM2M",
  "key33": "5DheD3Vjky1T4w7wHsYBCeCeJvXF2JpMfEXaXMTJbsPfy7jgWDkwhs7u7vXmWzAfEuYbSmUURJXHNaQnoTZ74kwN",
  "key34": "sqfyYkiA3ThmzArDzhAMZrxGcRRUWGnJgsb99TS7htWHaNnFxUrEgigkE9jC3SKaiUm6nZ4N8u99dF3xJoN5Lx1",
  "key35": "2gFnufMamDaPgE562TnCuxCasiqNTAfwr6c9VafJx3KknijPnT7wETXHWSRCYkRZzLK3wgcUruG5vsq6awSZnN72",
  "key36": "3FkyuFQ7WMRQpAWuEEwv3SxpU8q192CXozMKYFYJUxiz15b44BLQ7tw5abrdojRDYBYRF3p1e6EViaas2yyfX9PJ",
  "key37": "4Yqu7vXUf55Q3eAmdJM76a6wSQqhWywwYqDMGVMfb2qTP2Kp2c5yfqtugBsNBrUf2SCWsTvRN77xMaXkbMq77dS7",
  "key38": "5Ddg1NCmbinPm6uP7vGiiGVYEjLBLM3xKN128ihzDfhhYhQY1TZeC4Eznnaj6ty4YNHMEsLRTehnZP5uCgC9VDHz",
  "key39": "W4SVfbzatMsP54Hn2g6jJg86sHAqVLqB2vXmu5hTbwk7Q5ZgpFwMnPWZmXnUHwGaqCr6eGLGR2RBM8oNh6R9z3T",
  "key40": "rriht8fDuP1TTiMzwaRQk75QFPEedYzBiJUVHptcCHgK3NH1Af8spt64Chp7HtcTuuFqXXC47Wq4JSGijiy7dxL",
  "key41": "suXbwR8S5sWDZKKzfsQpXbiGybZcJQHAaVX1qmc7GHvm3whZc1rivsLaBNARb8ij5CHDDNuZ7X74xvJft2xkDXM",
  "key42": "2vpgyq152BuLS4YndBmVW5oxkQBBKhHZTAiE38Z3PoX6NSzTkatUTLf9bH7mD9YXqKxPiXpVbQWgggYqBsqVMzHt",
  "key43": "2MM3WpUZM76bHd2ePv4Zkn3aTcdhfLHaPMo6uHPRMXgFSLUgTgs8Nr2JyjcnkNPGqnMxXVo2CwCqyzZbTzQB6sYC",
  "key44": "5cLs8Qu1dgHo69ZtA64BgqZfUGxuP5ftEsm1acwv1tKNwftSvyawxVeUrFG3mN78sRPUh5maEoBn9Shb3Uex9oNj",
  "key45": "3XwrdQNgGxEifAyeVoDEuVCTchnK4hSuqbGkWTA92KCHerQLNbU6fSnn7owXyW82ADqEv9V7ykaJK698mUFrcRxL",
  "key46": "4GG4yC3GTfUPBhbx52NjbJnGYPD9kYXA643DrDuwZne4FGJ5yD4E41H8NKA6iRYEe4hJEg1SrxZMCSTvc3pUWyWo"
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
