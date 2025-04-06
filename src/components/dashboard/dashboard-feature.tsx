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
    "49oABeoUgPkVYHF2PPx2kPxWmjJXhdZ7DAT67Row88AR7PC1as4ixDM2Wtz3D7gFg8ypuu4aFRDbBqEZMFmF3RY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAz5HKU2iEGBd9HVigN4sey7AEgXiZoBYehmLeAe6zj1pBSqhsWiHp593xYbZ9uP4xABUAiJggpRPrvAZG1QhUB",
  "key1": "2qQreC8gUWezxqMPdaZPNrKvWSbinqDbiWrgS5ucLupycobRFYdBPVsosibctYp8cRdYyXabm1Yn3bg6Gm6Ew1r2",
  "key2": "2cWnsrs3C7BKxtEfJNLmzK9n86uFYuGTW7E6Uuy7LmWBWZMVEGJm7hNovVwQWz4nriECo3ScPxNKMVJpn1jrRS3h",
  "key3": "28kUfEookAUZtJifA4EPZY6PfLczMLfsY3F55arnKJm2bdkDSRgVWQ69WyMua2cGobh5gist5d1Vdvku9T5TYbZJ",
  "key4": "5hzPGkdnS84zFjP2wvaJisrynBbWUVWYzZsLTRiv4Ur2CsjuJ9P1FVVapra4Lw8HiydK93HMeTenEcWp2wqVFcko",
  "key5": "351R38wvpyTEQf3c4DjHw1HTEq4hwBpm9NYQMdjvjAU9SF9oKChwNpTRq9M7BMFThTo93ctiw15m73x7MCit2BEZ",
  "key6": "5uHGjgdTe8w7uWD7mZPvovhN6PmqNi7Jm79zfZaUzkMmFRp3fGfRjxSCX18XqKRPD2UDKA3PHXCgfF989uo5ewuz",
  "key7": "5LGVnFwWqzUu5mibay8Mxbzs3STsYrBXoTimti68uKYPe43HmRh8krQ3aN6xPysGUWkqz2PhpNwJpwn3baYYXuCH",
  "key8": "4JUfwjNnFSTdw7mZPSY2jMPtuAPgp5JsmCntoQDPmrX9x7gh2A7R5dDWi5CCF8psusbN3ruf3EWpeGmrfWrvLsDa",
  "key9": "534bUgP9VawZpCW74TSwkv7TwVqogswqUFPqXmjugJQaewN8WBq6FddGiDUKcpXuJPkWCDFs8jKrhkA9WXK3r9JF",
  "key10": "R7FkL4YQwVJ7xuAKtn6hC4WYmS7T4pEV6x5KUchumUoC9q5fsoGe7XUvNEcruBozoCWi4C9ScN8GKjDRrkmipDf",
  "key11": "36tuoRnxgRQJqX6CT1eUYKxsLTqvKbEpnssBtvRn8xd78bh1gA21hy2BpEXLkoPKbAkzGse6vkVmPRKMBumri4gm",
  "key12": "2s3TbtQxN1mGM1SpqrupQRVM5cBkhGoGFhkcq56V2hseH8si1C8xxQpTu3Gyo8JVvF2yrhvHt4PverkaxC9zMFQc",
  "key13": "3NgujKJq3Ew4bLNbQ6DopKLZVuMuU9F5WgdWgvs5g4sLD5CNos1JtMNCwJDJXBTwXjUwhP9U1DZyK4EzkKn5oZvQ",
  "key14": "5gNMgucZgQWyocFD7QQdb2XHHspV6uY5svrskmJ7ujMrzA1GohQ31U8xToraDE1Gp1Qfyxd9a4TajXKLTTeUtJZK",
  "key15": "22xQ9jT8kCFBRHE44igVsAjWjMKBJEGGpnYfePLNFWQVN3NUwyne7XiCLYcaxDvGPGhc6Zj2sSCZbY2F9UoMnrLb",
  "key16": "5JL7sGCARunnqc1iq7DHQ5yYoger1C1NxCyrvcvbYSJxj8xiAojN4kedsBH53xLyajhFcK2GRGBGMtkByVvURPWz",
  "key17": "38VVqFSkvGyFNKCwjQf1s4GspXzppwazWV2QSu9j4oett2oLm9BNBj3Ye1SVhnbwfHGa2rkzHsU3opAQofGueAUX",
  "key18": "3QfdnY4Spk4NfJ8HBSPm4EXbGEtd3JVX5gQqkP1pPsPm5LDrQZbCpQc1etdCWGYTQyj33kPFCpWSv368wqs62dMj",
  "key19": "36N66AsDd1WhVu33LSHQKviktj7vK44HCH969ByAJs6RCfZAtS47rgGkFpKWh7kwNjYMSPSjUiZ4uAR4gbBiGmNg",
  "key20": "2aSFQw8hCTD7qT6EdQzwXMVY7eDwaeTUdgbdAVEoSGVNYNBhs86cxnWf99VHicoNs6SRTotViWBN5j23pyXt4Zjd",
  "key21": "MYiL2ze1pLsN9nsio7WdbLPCV4aQzQd1sZV4bUBWo8Yo85fGjnUoF93EjuNDk74rW9FSg6MLEbNXy2HGx8Lt1mo",
  "key22": "2eBhVe4PRd6K9TVFqFSDbe1K8ZQWkeKhXmRfiCNiUUnEzttMxavUoHEEcNNN2JYVvTJ64BbD6fmxWUZuYmwhd12z",
  "key23": "4cKVF7KJyiAjzcQTgMHzpVQhtZ5j8guDC2z6AoMao8TVeaGwQpfSdg54gHEGecUW8ikx6HnzbnPU6RJv1JnxHVLZ",
  "key24": "2fxfuecnYnZNYgezV3iTEAo4uqzoKigPLUx7TyueHyL8q9CRTK1QH76H5feT8yMhVGiTbrpgUaMbXTCyQ75FrjhR",
  "key25": "48RR1jvK6CicE7Vd4v5nCzBptkXPrSuHYWPBWfJaueZVtiQZSpnstENpoX1r9Yn2vh7NXQgUtfJauwHjc7MuRDmP",
  "key26": "2dQCgCNTa7LUxjdamrzXK8GjuBLUfr8bctMAqiUKVwhnjEa3dTZeVE95PX15XDUGGbjeB4G4m48iqaYNBmuDgELc",
  "key27": "G1vvy4N7yeyWBmPt2YhK4Tm3QCbxjGTQqJZ7HtpVttLVEdP8YFSGerjWke66TxEW9j8Udq292nYYPXiuANiZ97w",
  "key28": "Revv8SZEUczuLPi8vypNRT4yDiBghfs1Wa49HeMYyQPNMGw5j7GHdCqvhNkoAf7caUfMUbsgEyDDp6rfWayZ5q7",
  "key29": "4HACPDE3K2UhGTNmAXMnWabehUtYHxKPS8x7Bva3cTiFnfh3E7sHfgoSACnUrTtA67gRN3vgPX3fS6LRwb5DbJbM",
  "key30": "2mb6DHrCxkoAxZiv9hWYb1jXmd1HwHzruZKoMPMDrCsNmxYGjwFBntjjDobRGriq1Ditaoh6aSmpRzfgBrkswkic",
  "key31": "2wpMk3TiWFVtK4xPUc7B81TdHw6bMawftqPqLMrpQPuZTgkLQAsqUaSPW1o1xyhZrVaNzBcsRD68fSonySsunoqq",
  "key32": "5sL2Bm8H54HnAeU1vN7a69SCh3S43yS1XH3yZeuc94eWhyEJzHwNHJra2qvfiyfTLTRBz29WwtTbPLwf42m7782",
  "key33": "2xQdHvEorxJHuiv1oNcYR1HWvv8zFavUndfzREJxsMPkmfLtDQtQ5T75SczErtXitruiijfRmyxSUumjfQf2wWWT",
  "key34": "5yg1Xgz6u8PLh8xDMjVPvRXNq7upvAQMojjN9vEYJALkyRQaAKTZ4EqVapHNg9w7rdjmMgzTJ5y7x3zkArzXqgc3",
  "key35": "2RwvrsqcGkraEBzyB8Q5NFP9VYREeLQQh5aGRLxFSrwYV3bmZTv4vETAgB7eq6kAwwa744cjHrNyTCCuWnAKynJW",
  "key36": "4CMfaxNG4PKKMM7dBie7QrCGhw5neKcLNoibieMtkSGGFsAnj1Ba8WDFc353jffpD2gCiJTnxFKBRWjwJKBUhcP3",
  "key37": "3ctVDts4gudE2v23rcdGH8hsGwU6EBqfp7jS4CCsK8qVzBC6syPUMKCjQiru6Hg6rK5mAXcv1sk7SXePZwKMm2h6",
  "key38": "3BSMSCuhTpLke2KK3mFrb2jVoU8t8DNVUw8GD8RSsyGaZm9e8am374xKQi9NTHM6Rqryt4xBYqUTB6EQKG52Cm5P",
  "key39": "53P6XgpaPUEJEa4gWBcgABnkh4B7zXHW4yb9aZKBsidirTcpZ5JZ7utVNCtsBA8M2KkcameFF4QYanf32pa8XdGo",
  "key40": "xiXMZjBqhKyVFt9HM4tRX4j3kVuD2etfTX1K5FqnPmCTqtmT4xpEoLrGp1daise6WNrTS6y5EgUfaFKHCwKVPje",
  "key41": "4Nuk7Xbd6cjfCXaRDGTPUnFVtR6iGsE3q3SNLzuoHa19ocknkN4gMo2poZ7bm7qkjNyx2jFMRhVK9q9xQrgHkTkm",
  "key42": "3JC13z6j2fqNLuJoBXRXTU7PR3yQfyaARLXnUTj4bbEvFcQ6ij34sp1qbcxdFwRc6EBNXQUHiiEW5Mnv6iFL1rFs",
  "key43": "vFgAAqEUWnW1G4aUCEsKMaXKBQVhb7PU9kBvfgxoyERbALUdBjgVwyQMWyFqBLgFAA2w4XuTHRq2d8T3dNNhbXY",
  "key44": "EsLg9FwF4AwdF6KBbq6KoiceaaxV2TpxqK6riehCDWGmQhBjEvA62rzHMShwRqtWmUB4NSUXVfEE3K3fXiq8TY5",
  "key45": "3KbhT26E1HMWS8o8eV3tJr4hbQCN3gtNoNu6BXFtAnU5wJ5N1QYRL6AevrJDwqNSSYCLQhrCZ1m9T5LUJUWcV7gB",
  "key46": "66NBTD5qSgpvGrrAfPtWkTFE1DpeXLRWj726zjxzmHz2EifqtiU96cQTQN3LbGgXctoiddeFL4XSDaSuwy69Mzb7"
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
