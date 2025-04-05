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
    "36C3RQrMmST9vdX7ysLZKGkbQhgLyPHoopNq8QF5QFJnmjePkJSZcGvCCrsXmnXRbo3Fc8uowdiyz3jZTmYMdE3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XZMqET8tkRyT23pFbPdTJ5a43fovzgf7ovB6QFvXZWaTA8iHyBHkCVwbRuxCdjN9KHjoAMzSTg4rAkkEJsf7Sx",
  "key1": "etx4AyDpuMBNTx4HdyBFr114g754ACQT13QdYkqQTFXt8KXutsXmLERDyK1xSE9Fq2QxhH6e2BB64oKxpU7CmmG",
  "key2": "2Zph64TxSGBxaCb2oCuofGwAyE76gfmrJnBpWPA5nebLn4U2QwvFiez5L73TSVvpxjDrTsav2UE93Q4Atoa3DMdp",
  "key3": "4ecCZRUcCEsjBXPv48AXR5pW3KXUEvXdMVwCsDL9Z5a934MVPmAvEz7YDSFU9wKEFvee1rrKdUY8oFEVt2Y2ajjS",
  "key4": "3GFkT1hWykbvfgUexELbDwXtKy6N7thHe8n6Ta28QdpXuMqq18qZDuErmZaykoAhLbgTTNwS6CnSRCEPi8CoRwZH",
  "key5": "L7t62FiAWE3eoRdpWjP1h5t8KkfqB2myZt8e94a5YH7gaErSGxCbVGK14x6R27L7HTa6hH4f2nhhFbo1RzEWuGz",
  "key6": "57vrAxBdVKeuhqSYeaavqyxygcmve3xKMKjuYSpA3Mv6sccf6iPuJXXCrTndV5giTd6PXxSg8qG8HSkqaDNiFdGL",
  "key7": "2qGAUUQkCzmYPMa3ENE8hqUSiyhsN9ANtpmbnRBCRymRwNsLwtKdwySxcVbrfDeQy8jPiqckWuBgf9iVcThYykLp",
  "key8": "4cD7xuYPzbxPT37DA8HVo4TWHYqqEgxaYd7pq5fLfTCrvjXFg8RmhXCnUQcugtUF1htH6Sj91hvMHMp1dFsJAWMC",
  "key9": "r36kZRjpFFt6iJDPBWK5ryWjW85ZMkS8mBAoFht8un3cocCUy4Ew8ULLj47EY3vnknZ1ctaDeJo78Ws7TgviRDV",
  "key10": "2ais6CsbqLVMjc9XaNnatWeXPQAkifpT32wGf4zrihdbYqao6sQfr5XipZhPqq38GF9FBHzTmzWrU4DTBYF11uCs",
  "key11": "HezGaSGaSfesj1ZsWN7PfwuWvqne9DH2sNbmWQN2djBjiSQBLR73oG3Rq7zCSbWNfbmkQ8RvkVpXpC3oH9Nm9Fm",
  "key12": "48gtfqdki2emW4b91681MS4UQ6C5YH49y7YUaCuAtRq7idZGefPNNgjDAFTmqc93qeBFRdxChyPYjTwtWSAwUzdU",
  "key13": "2L5934TYUR9ABpCfRohHCpMhGXS89jnz2SkcxYhRHY2eAbDmip1fBoijcA4N6hL9iQaEW6Tk8gHzPE1cVEk9aupC",
  "key14": "4pNjcoKt5LR8UZVypwbd3JHXX7B51iKfti31yPNTLBRizns6TJ4sqCkwkAW9wjZFA9xfNz3Ajo6Jpu5Vo1iXKMD6",
  "key15": "58vzKucWKtacyV7vx8w4VUGcdsjWn3tjA1cXRyJ5qUy8xaiUe4GnmSJaFYB9PDnHjgFUR7V2hciyWvcBNJTCSFy2",
  "key16": "3F2kNR6qEoZgeZU8EGcnP6H9U3Zihk8vwihvWRQu5jtR1AYz3ncFn83zjVN6jxfDG6aZG6eYHEK8A4mXdjViFxfJ",
  "key17": "2krnbNkeTcgHxWsKAENC38LtCQSo3vZQNu2NDkBbLhjvLH4jyn3Trq9ykjyZXK28uAQEYwkRdnKWvC22wyAb4qBv",
  "key18": "3gUHrfGeC67Lyk38oNocberVNMAeXrKap71EmmMcvdutQbU8qyCPnSk2DStJdY57kUjqmeP8oyZrPqbHN4eBPN1P",
  "key19": "5U3oytZP9biyjxL4xDPp4L7RhwpQuCiJdz7d8s9swT9CBP1beUxA7uPGrAHimzX8AKVKMaYu6bFqPg2wgiEsvP1N",
  "key20": "5nsWSAYz9o2shXyfmkvsdbniZbrmVRzwuqNHNpUo5DBqzARtPZLp7uvjji8xvFkcQPPigkgSEcMDxHF6NxXuNrHi",
  "key21": "4WdpVLsfHJAN2bYtg2dXiVknABbk6hkKX6oQLDNGjihTWXt52FUDGmhdK8vBBdhbaojmPYhpb9dnqNSepbwtMtPP",
  "key22": "5EyUr1SR5K7LntgirNZA36xd6hp4AGgbpDBxPmUpHRwnG8Z2mXrpERkcDFnJsdmHutFsASNnZqFaTj7YEkuW5Zdh",
  "key23": "Uswc1Z8g7urCA9R1ZiWJhBuxhP2cDKeDgtcEgmBN9EU1Wq3qKdDhVUbCdGEBksRFbcUtxbp6jM1uNfREyCc6EgK",
  "key24": "5tfDdpuCwwAJXspb38uoZXL9Fk8YUonm2toLky5t75kBd4ZhtotUES9KfLyWy1RzAACBzUUgzdZfyHrDpesYE3fR",
  "key25": "4XHpip1Muh6CJuDAgVtS7DdLF1DGpZpm8VUCCh5vJRjiuid2cJNtgEQgnEd9Jt1bg7RTWxsMUrP5uGGe6QMawXWm",
  "key26": "2Lvfv9WWPBVG9JSSTuUqGyXHHytdv7m2SUiFVZCCRwyAG3Cv8RmvfWQ6vVJe9VwyGSTF7MdwMC8qL8o3ZJwQVZvA",
  "key27": "2vRmG5e5bhTcxYtCdrBvy5j8GnMsgj7CaJVBHh5AEuAdzJptTicJyKciZdy9tV27CzHkwoq8zhbZ6sBVmfw2h424",
  "key28": "4yTjDtsNa2pvYciCG53vef58ZoVCVLt2hq3kQowEB1HxkjBJw93FpGL9GSTdhUZquFr3PvJwZ9Pt4vNEEeKsr3hP",
  "key29": "sN6EyHaRofsL8Xut5DdrtKZoy6JnoakoKpLaCpXMxqUzP6y8oaXSYhxz3Nzzhmc9MqhdajUmXqqQ7vL3zJDcrNR",
  "key30": "38J2D2JFftqGGjX4s2QiEjrYtRE9EejwEnVSJSYvevMbsecuUztfjGyxW8jDE2yzw5WDoxc5csrPmCwHDjUwmoWQ",
  "key31": "3RT9xU8n7NbviTBUnefMw9mi1S9aYkNbjXtuK8PvDRyoAWcSn668NpySCnqoMHojtfJ7zYKeESHJs7itDfkfnHip",
  "key32": "5t2XdCrb3N9bGtTvj1F6f5zNZUEmLeUbPapc6VJwL5ZtcNj4JQdntfFLiaed9QAf92rCGTKELAbuxpS8zsHaVenm",
  "key33": "KTX6b9GR5QKuHXW4SszxiWL6vBQgPC8D6PUyBmh5zSeR3rGnaKfs5zFvQ2e14VhfiU4nqRcAdAzUSh3pqSSaUVf",
  "key34": "1viBKr7AWmcYnaEA29jizojG77Vw2i65j1Q77huAVaLUTkwSdf1Jo28Da81yP1WtRNDQzMBZ5KR2USbgWK7dWZ2",
  "key35": "4qDWfiejLAtJABW92mXH4GkSt3ioPzXSzg8uWDdwXxBavjGwcVmgRb87P42jzEAD72i3vCqSNTyz3WhpaVggGMs9",
  "key36": "3Birapf7yd1sF9jmR88MiRupJowJNwqLL2ixoDs8ciUa2HeqWzrmyXPsNKmHMVMoWa32fAPXHZY6FkqSkWvFcnHe",
  "key37": "498RQAv3LDT87kow9k2xgmzEV9WVQdrS1bFQopCvstCKfs3gpd6cWYmkQbTs1sNGe7VpWVFeaagMmwXVynZootig",
  "key38": "4vBsd5uUkiHLQCMnQsrgV9R3wHVKGadTxrnP5NHaZDs9zjR6ZVgAKsJxLR1AHAEydJGrULdVxpXXQgYkRi6oLzJc",
  "key39": "3cdWBoCC2NJzaV6on3g7mAR9sXjFnRPLcZaWsorPpNuipZKUXQFXvxZYaGk2Riifkvi8uDh9vyE1wAxfjVbPB4ed",
  "key40": "2n9LUXe42EYnoAV7Zo31Gg2hAXktPMizVabT5J8EdrERrsDrsqdf8trZz2nRfKnDeyPU6huFgGb5ePMERGTBRq2T",
  "key41": "9PCKNyKhT39icunFkhoNXkgJ2CKLi3C1suHt9BuNoVUunkFLRWDTVj4pXoSSDY8FFfjd6vzRR6me6tk5jVPq3TB",
  "key42": "2Cf24AFgWEX6NAt3J7GFRPHLqH41wRP6bM3GyQ5HYVjNpAjA4g1WAPKZ7r96tcwcM4U811fHcnLjWdo7s3Bsrkua",
  "key43": "3tHZAhnstnMx6wqFnYVAZY8TwY4DJ8ej4vuQSuutQKUgCJHGtDLNUXGm1iE17EFKvJARXEettHSCUPhmQN51oH67",
  "key44": "JzJCYWtGBjyvH6UwBQB2DegEvdeZRbBjCQUD2Nxkq1TAJcdP2WYhTctLxgJTjj324Ygpb7cPLc2UuJmguAFPcD2",
  "key45": "4jsKZjeM722bg7VGRFHj1RzzqpssBKZyAU468vCK8fY4WGwhEkUMV9jfbkwNJRc99oSwjdfWksRtFyVRYHhRNH2W",
  "key46": "25Czob4JnSgsL9UihxDY89BhnYodiPo3U1SGR3kVkXXWaF74nYYPhm7pFfBGX5gy9oqTx5Gfr6wcW4qiEAiaXcci",
  "key47": "2aPQSdjiSATK4Pa9pFCk4q6wMZ4RDXLxhsuzcEoMKXsTvj6tcMnP2kSVgdrMFd9ezGRai3txocmgrUDPZDcb18EJ",
  "key48": "3q9Vgxn5N18G4nWpaEcQCx9bES11ms22rFPV2bEoEKMVcg2yqhF7ZUVox1GxWDzWXrhTgqoJGxz3YiX2CYiLXN5J",
  "key49": "5AfzSDQeKDBBhfhjojcTACsXMCmA7MnC82FCdcfwQo5pBS4CrQKaUoRAQxSZMgr131G64bT3zad35HTdgJLFBSXZ"
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
