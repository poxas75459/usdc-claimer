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
    "2VkURChYiHAxLnjNe84DeEiFECvsGB4QbXLhEY4xUAiQCHTMz3i1m6r1NodtAmSAN4q1d6WGfngxfV7JVdbepLqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MN9H8HmjyEk2JgKWKUFaobqnSH8chJdafvrTLXb7pbeUhKkvr95QGZumzz6kMH79T4pWAMD6RqqcYR97msndWei",
  "key1": "4zXy9PiiStEfHQJesj1Nwyheyr82R99sP2WDB5C6tcV5YccqEsEsuNBkoKbkedCBqTQmPPo94UgzeZSYegckXVse",
  "key2": "5scwfB2j9KC5E6FxyKaTyU41CFYs7H22y5Lhn1SXc57vQ4EEApfkSvw5BRVMNMqn9Gxm43JSdafgvzCKbeZ6Ry6k",
  "key3": "2G9bMM38B1kTVm7rL5Vscz8hLtrmKPFQRa5WR7shiVY2FTfdikRXx28hAy2kmzCeTzrHJGRLE9jpRACXukbrLZGE",
  "key4": "Xgt9raadabprzjeWTZxuQd3LebBaCCpXhVNz98yJ8gM7VixsxBKDG4Lz1CRiXDdTo4DTyJjb3YtXacrxf2upd5R",
  "key5": "H1nt8LC9x6wahuErEG5jEcWxATB4afYBeR6bydeuYdLicD8qxc7VekWsaGajFUQZy6ZjhBAqC7exrcPnnnPkdAg",
  "key6": "5MHrRKQEVtAFDC8fcHUGAhvVvBxx6rXQdX2FoK1Rnz54ubDrnXbFUz855eJJCy4mdj4waVi4z6QDARFgsgoKyoxe",
  "key7": "21St4Qb8qDKPfGGKPFX8yNk6gyewmVoc1VHvVVmik8JQGPiFzBgYvKVCADMS2fgzFUZQTNxAwWxrVdT6bg9kWByK",
  "key8": "5MJhX7zj7qAEDTd3N4RXoAZsKhWiFs4nKg3MRhr2aEwSRP71h5awnRJBEr49eE9csnSVTRGHpPizXJKTmCmUy3ph",
  "key9": "2RMLH3kxnmBFfvuYZAgoGP1goKG6zUR5dAaFy7zsB6ZiMMxDqMDmBTsxoSedSSkTYqVba5Ejw5CvGWTJQogmFMf7",
  "key10": "3vK9655s3fT8ySMzCxNCvXaaCsB3CBA4KGaHoiXZomEyXB5UPHnqxb63o6BHFmUMoEWfBQGuoCNYvVfitUb6upJK",
  "key11": "4fUAqK54f2v4dR5jNyVcvA9j6LGaTTLZMAzooHXLusJtUg2QmXt3v9skBuMvV7zGU3VqaHw5R6kBbGCXWoo6L9Qs",
  "key12": "4yk6HuroioaAmKXHS9bqpR9xWBLvqyctmXK8dxuHufj1zkwo73k5TDtLvZdBkSdQXcDUEx8PPyiu753scbvDXRZb",
  "key13": "4QwbDjcg6DQYGz3eKPYcL6XRfJmRPdkqGFvyEUuSocgwM1Ls7wsds3w31U6h57ZeGWPvcKjXZoomhN8XLwEXdNrW",
  "key14": "5yme6qmqyHfYKPHwQCuYzgMLqFCc2MLgWzmjJ5Kqx9Y1kXgbXRBoUwbNygXvwYMdoQURJonjuyxcDg5RWiyQtkX7",
  "key15": "5VMfdTJ6icowMLEoWKyKmVdzYsGCYqej5QmvP4dTWNcnceujdMitqixVX8mQC3Ndh5SZZsuRw9rwbd1WQrssiGZH",
  "key16": "5xkR1rT1cJGPohGzC58GJXgy4LheZRy6RaUPsVMqy8QLpUvKELuFyVnvdhRSA1QHuFx1E7w5fDCyavRVSQsUucCv",
  "key17": "HAt4m2TDPP75idBzh5ycqNju4x9wytCJANQb2rFohvBGLRzMmY45KbmfGu31Gt8cBVMLV6A4sSgsaEkW31aZRzh",
  "key18": "QEysPGn51x88qTe7rLTDqzQwbAJ5hMZaHBKEorCGjnuxLgcbWXLD3ZxaChZ5YGwYQJKqVxiCdoawg2whQN7E154",
  "key19": "3z4cpFW8Ka7B2kZ4mDypu4ZK48SBqnGwEqiy7pJEixYBqjFvfy9yx9KdEyg4rfigJ84G968WkJPDAqhyeWYZ1dHN",
  "key20": "3oCiRGR2gR2awHzdFMqJ1cTCzb7ukdpPSNywVydJojFmjL2kQNU7z6TWHZyHxCQqWBCEtRK7aGYg7bGNEqE1d8PW",
  "key21": "oUBcj1Ri1437cq6mfbGAeL1P9h1fHwQxt6joH3Jy8tkaUkBCghSFbXvFWnKwoVr9tvgfHHJV2JGuPsPdP7mUp13",
  "key22": "78e15m62Pbzn53WVkou71jfMF4mEr4h35GhMVwCH8K6Pmjvo5eg9gXahDgvV2HvVvEzHiaqRXdiRyJA2rQXjLwX",
  "key23": "4ryfuRpGnCvXVoyzxZYG3rWCo67DEe1ui1QwkDBczxZEqDRufQdyTvzofegsMFnuAFWxqL5WPepAWVsEJw8vrn9v",
  "key24": "4m6nEsaSzQui1gqB2mcB9Z2vipbzStHM4LWMf6FgPzWb23hMUkKuZBXKeJDeDdHNnH1EurcdPaeHeqZB4iNMMAyj",
  "key25": "3NE53LDUd2nYJwkm3YraHbFK5F4yjamNtuqyvSJBpWFMb6o6aDVchLdSibQfib48dgoGynqpVEcFkyQtmYTYNgC4",
  "key26": "5Gj85kPjKrkQMDDZADCFNfWEx9tyd6HxqcDajBpireM1QXK1oxxkhrNvbubyMZugATtGcwwZ92ww71pMkJY7mVC",
  "key27": "2uSB5v4d66NM3qXVh8uFYbF1YJ55Etn43YJv6gNZTdAmngW5hxGmVBrcyKsTxxvQHjbCtbFWvYBBtQH2zcMv3Lqn",
  "key28": "rM7KWmWaA6QQFEDM6bpTdYjWAz3bVMeBRnyzYXKwTXuogwzbDPayQ5jUhpZNPQBUURSuDznu61uECptFABmuUeb",
  "key29": "59HtRCJ85vqosH2Keyg4iBSAgW8ZEFX7GYNdxLV2TgKtgsPxcKf1F98Sn9zDnDV6FX4QriXtrcyAXMpEqrXwS7bX",
  "key30": "659UkSpxgiVVQPKGGdGqsJHd4GMfkvDePdAzkgnFrzLEET49ZdSxZA4RVPVMDEyQgzA2R5oV4QpvivxHTQBifLS4",
  "key31": "4EotFzyvRUQ9JqPuPxntbhEimFtPSxtszFarNvUo4f41M36RoQd4UtBhcRHg4bTfcvB6kKXX6MsoCNFcvqtYZje6",
  "key32": "E1kE4CGXS83DqCTMXqeJTTDaLRspwErckCNP4JHN2CXezELoLVketMdJcakUWGei84TJW52ptrNLbB1eTzT1UrR",
  "key33": "qEovx63JFEkTQVFotJxQVMEtbeZCZqQp5efpMAnhugcwwNJNeJ4v7RKAAmsB9zTGk9MmgNNmW355g32VSFZ7b6y",
  "key34": "3Xkd66zCFhqrpc4HEW8HPDyh6rEzfdTp4hj8jUk4KdfMxLKm84Yq8Ti3NyDgcYGVC56VPpLi1z3MGJUwABvFyo34",
  "key35": "66SfYd2VZYKo86j4h8fC8GyQpSZ27fhmAFLmu3yBFsYDTJKHgHqFjnxyWpsGTYoPDTHEHXcWaKrrED7gr7JQTrJK",
  "key36": "46K5BEsdi2ey3C48jtRYfTGAEZ5NnN4FUtnLuJ62uTw8zk2k4LkuZR8fPSSCRnxG8bXTVMYP9RM22GTBW6j4fqiJ",
  "key37": "51jZcWCLoqqdgTxFRNfWir93gRURywJeebPtZTeANoG6uQz3BsCyGHiJSqiF3jSDWm7PsCEdybbNZEdwpC5cGS3",
  "key38": "31TrVmppPMZRT2QxQArXbEpKEpKhYYjhf2kLFg1NMYPbPuXzCkSFQ7zVpdb7EE4sL2u9GC1Ts8n3QMwuPmGGGneb",
  "key39": "4rKxzFuxDkbj2Jq5xgrJQBhJJkug6wxRXF82aBeT3AQbDWadB2wUerh5FAnEaNZ4h5pQq1SQFvir4kzCRvGMHvme",
  "key40": "6bn3rNutLfNoCtaE8YbUhZR9HgnTUD5T8DQXvLpCzhqKjCYSZYLoA4MhSZxJMZLvMqFEpXtuxna9cDkddrQiPMi",
  "key41": "3gTTVsFBLD8VFV8yd6Xx6WtujcK4KkEpqq1wtcbCDbNU7gm9Tvupj9s5pJnfZpXNCLDnvnPasrP4UCXP7C1zfkvZ",
  "key42": "5PfLd3udnzHwho6dc2DFBYhEb3zwcx4QK5ZXxERteH5o2W3xfHVQeqGybmW289BL8Fsyy2kpz327KPJxGhGPa3b5",
  "key43": "22M11q1hdJFaq12wzxkkoUJF2rp9s7AD3ZvGzf8XDLFpPMomtfcsG2UrCenu8vWk19pt1h22or5hhyczn7hME1x9",
  "key44": "5K85Z718KyfzK8fSMMHNGR43aBgC9YDVZdc659nmP92whxWXHfrkv6FaPRbk1jStdqXrKZ5xehiCfEmEqZzZAVEe"
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
