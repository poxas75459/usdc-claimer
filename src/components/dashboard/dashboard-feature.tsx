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
    "4enz1qGrrKPnP2oXxofsaqfBKrZmCNjCU2MaHNNSt7shFtJq7how8Gxsd7ms7nidpWmVNxYRR4iYzmufeQoHvwPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YGR3CA34QkBGGJZppiJebbzMi4E4BdrwbTdMoXURJpaQJA6sH8WcQZwQ86VUKiVyRbhQHzs533vpRGwrTmrU2J",
  "key1": "GXEGmKHfEpX3oKa4QDNBpidvEGkvt63LNN1qJK6xTWbFweh5cL6srgmVDmNbX2ZkqVrX2D5DY7Y1jwKmwPFapeA",
  "key2": "4hYd2nj9fSNku1M3YJB9BncYRQTHz7EVt4RduQWyKJ7fiLG5UPxtuvXhYecnk1pQaR7KxBh69zYqstAdWfLKGjDQ",
  "key3": "7VzXfv3AFRDxmtzZvbAx2YPxfEDM86h6Dg3T3enzZ7zaUiaKtyjrrKfYPVGKj8L9ywWP6kLk5FivSqYj2yuunBh",
  "key4": "Vv9nNKsxpzCRnSS2AYNqGNdgUBLD3qysnMqDr7cSdYyuVprNpcK8zoCuYzbPoGgqYTaJLj1zJSjVwzjcBFSmALY",
  "key5": "3jExH72qYrZ8dZC88NaSXyekWn16GM2LPjFkR4JL6wKgdithcq8FX3zNJgk925jdvrn2v5PUSXBRvFs3crwSjKWd",
  "key6": "evKUh1wBTC6jGJ2qhKqThxh3oFXiHnKPTWq8bYuwTas8XPXTCecakpwdQiFcTug5acS88iaxoRzCU2ZR7tjeXNq",
  "key7": "FgTaMAZUiyUVMFPDBjchoEehQ8da8Cf5inXCfzHYm3tXFaSRxUQ7mFh5UuyQPbRYDB8NTAax4VqaN4qdXA8VcTP",
  "key8": "AJPTijfPKpQin6eSLo75yFEuFtz5N2uicoQTa7FaAn48p53WiG5qguETsJsoMDjKyiarvbv5Xu2Yn7rLiWuAtkd",
  "key9": "eWm9Q99528za9KYEoCJhyaKNaCmRYwBWUba8iGhjFrxdvjef8K7tgLt1bMVsXPRcFXeFSj12nTAmP9pQNZWBFPh",
  "key10": "41jE4YyJeSR1x5iSHQU3X1UBMrPPuLA64fGXxDZ32sPHTcFriHa6oA49GziaA4SjnVCjW98j9D395J6cDMyavZyD",
  "key11": "tDrsNMbvSwya2FzFekFq5Y5E8rzgNuYMTyMfS6nq67JCrgmfjJ27LV19DoMAvTwjeeLcsPK7KWFt5hnhVWf1gPz",
  "key12": "3pTSpp3KmGnfoFSbyDvHQF9mmKM8sx6s12c8536hzpjSm7aziTTL9WVxyu8CuygcAMcfDj34rvMniBZ1kSEsisq1",
  "key13": "3zhy6qV8XMJsgkcnCUD1AdtUGrQnqJEngDbf2TF6pZR59sM8Ge7aDtguYmQaE6z84UoXRqDYcmx61hQ6ErEj7ut3",
  "key14": "5GHXQCxMywL4RRuSBuSUVMQ8JLv7oM8nqCNxmw1Mf47ZQg8T8TyThNWPc3tH4Rd4Ao7Fquh9F3mLFxTSF6CbAvhA",
  "key15": "4fGXKPAnv34EoMeuPJuoL9Xx1v8YnLe5pNgxQ8WsCbat68HNeEAQCLmyTHciqn2CgukDdbzPHGfXXMo64n11E5Hp",
  "key16": "29TWKGbHQiAGWdXafFwbSUexdHJAwdzTU5GE4M1asber6cPPw5GkhAU3kJhV5BaKQL3VghW1YikNV6zPJmqw77aA",
  "key17": "2nXMK8krFZ66CqMWS7e6Vts5qTCF9CecS5AaztvcsDTMkFFuTUCXCpKpFNskDRXL4YZkvkEN2DRCXTSk3ecbVfUW",
  "key18": "4N1CEnADcw8Jgnm1bfBkFC6yXdtEyoKL77Gv6K28NVvqf8m6Up4ZJ44aXNc6jfL6KZK6NCNLKkP8fBV9AzkXSnqW",
  "key19": "5NhcKNDdWCP9DnGmydnUfN3FL3q2R7rL6xqCo7p2hGvB28kvJvYyDPBHCuN9Y69MMymovudXxvMybJF2MwSXDouC",
  "key20": "4w1nGq1rCVK2UVeGAwnqhD8uKpmvSKujRnABbHSJXo1wPCUSPZFwkijV1YsPsW2uWSucVWZTAf1qy1EhFmZZG2nT",
  "key21": "2k5eEYgxiy95KjSMSSFtUsGyYkSos3HmkC64VA4S2Sv1mm3kkHqNMqVhYQqkR5X1Jt19viA5T7V68cZLGk1hNAvW",
  "key22": "5GS51pvuKsDUELzDvDtCZwFAke9FV3Z9ma4Av3Ya5TmwAFVR2QmUhAGL4iPnALm6z2hkhgmSdarqHnELceL1obM5",
  "key23": "33ixyd1hLGmPjoSy9LdMAq9mqkQ7WbnrsKsyy2ugjihrmsfekG6CPhnfWn2eYSYgo2yG6ePCDL5Dtd6r2N3D2CDb",
  "key24": "2bhKR3zoRgiate8RcxjdXCjZC6SZ69WnQ5XbBZoNQ61mqzwexDfy9LC3tPQguTtWQpBnvxBWhHh8C8h7QbErBF2E",
  "key25": "677YiCE3khQCWa3vdqA3eVTiAo5SHAcqpLaUaG4BmT3fBrV3EB25SJtUgFUqrtEmgkqbrPHkckjCMudkkHBS4jEc",
  "key26": "3hK9XSfuFH7SEhua5Feq6ixtbT2Lk9FJhfmMndb4Q7UgFvaNJeBFqwfkiR4jUpHgSzPjLR7nVpnyJrEz4wfdJZYM",
  "key27": "2dnwU6Pb93VTL14tbsGDKT86HY3aXnH4NJDzA8NqRzdy7ydHcbF1MyUHQZ8B5cJdAEzd2qPGS7gSwQ1BNEqjTeF9",
  "key28": "w6DFKWJkddoD8JWRhWSCsey3UhsA9gFr9Vv1oZLPTW9GqfWH3jmie2PhvoTUCBdGstH5rFxcTAEMckq98cr3L7u",
  "key29": "2ZCEpZevFUEy1pvH7JK82K8WTXhd5zkQngXCpLSaZux7Sscx5Nwii3ZTArkmj3AGZ82yCQBWyeS289DFo9wcf1tY",
  "key30": "5FV5rYsivAppKzxxPRaz1qdka22T7SvCRv6p1AQDGrZVXcTXUC1WxngFKHGHitnJZrfSiBkS8sjbB65vjRAfVuNr",
  "key31": "2S8QqGZ1RYHGZNz4piRmQVGpeDwUh8eoPZaqNYtQxs5msdpUcNmwMH9snCUZtDwuFoE8zfDFKDV3EfYtY2sdPiYE",
  "key32": "5d94bXsWFXma5ivsGM9nDPdPjCzs211LJKF9iE1zKHwM1TAKv5AToDFQ4tZjop184QqraFHkXwumxNn4uv9uCGXr",
  "key33": "d5izbxBGCtesJJ9TSkR6tshTG6umnoQ6vjTWiHMLBgdDWdSLo5WEYGnVwyivZVTDbYN9GvQmuVNdXaJNzJw5y1X",
  "key34": "5XFEnDKUBvNS6wKdi96E8NFTQmaEerfwaKKyZyXX1LNzhKGGjQ1JMGVNxQ4btc4XqjkkoDiUFcCSGe5s8U8EdJU2",
  "key35": "22REMJ1Cifre4YDmEn1H2w1ehN2vQS6vXWnCZ9mEVNYpYgnUTGdPXzEszH2AxcvhvPzLHBxmKSk8X58CrPnrKG2F",
  "key36": "zTCkVXfNsfrmDprGe8jVjU5dHEgybU8LX3KTFHUEguaHWme1iLrjRzrj34Zngvgwm7MF8t6avweaXfCW124F9m5",
  "key37": "5bsD6YX4rdKJUFSCLJGfdiDvFkhFToXC4y2YGzHCVffhyHW966ZZb64iweVxuGNAkmD42GaX2mLAptdgXB7FYD8S",
  "key38": "3DZm7wewsaCpHEPur8UzyRuDnje6herTiDgrcQZkRtA3H99fQ3qkFeew53FebeUc6Mi7ApY1P9ethpmR5Cy52Th1",
  "key39": "kz3M4W8xDGKcQ16XFo2PY46wceYrd2RCyRoY72hk5zMovvKU5SQsmRDFcpRbAifs9etG38DX3w2eUFGakFxrG6D",
  "key40": "7XFo5xGQuL7qRPy1YzpNffbUnDE9ET4yZnfHMVhrf4swLkmBXHdxXaTYb5phsA7VPUG3MVF9X3ztQynfvdmWnr8",
  "key41": "52rt12WDYmfgjDBHaX42fMxYfn3211fnUb2okp3fHRVkTbRXzotTJQcbJi36B17EWXKmnZtxBDESkNDnAuiC2isQ",
  "key42": "3KKZAd5WiaQxm6DBEEn7DgWVDWAyjhTjXehhpecUaxiMJ2f2XeanZDoTv4b5Jim3vamttWsa4jgvSijucHsK2kGR"
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
