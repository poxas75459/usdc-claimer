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
    "EVCvdkUKhjwLjR6hHRwZ6vgdxFq9nXKLzVdRU2LEqE581JPvsQ5FHnpzf1JWxB1MorzT4c5Kvfrnne9mB153n3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCExevbv9P8RF2nLWZyA7f9pXemJN1AUS2XsmKZVfY6ftY3dNMWcqdAHDbCPsASV8TKK72YMueN3ZyTadKxv5ph",
  "key1": "58MUb6PhRDDwrJJDcV9SHSMjypu9vwnmXmfV6TM2DAXoiNm95wjCvsPuJLGicQ1UxwRFHTCrCoHr6bJqxyPQSHrC",
  "key2": "66PyB6vYMuLvZVudM3kP75tXh2BumspwmD4iNgqV6awAmwmZNgpCSFAsp7WKVpU2v2bTwS9785yU6hrwZrwDkKcw",
  "key3": "5CFAcapAWVn6YrEWWTUii7LxQj8jMfXNJMhNK9rnRsJe8hiBo81iPfmEiaAgq7js9DVVKRVmGnDzt7MnVsd3U4At",
  "key4": "46NCBnQUDkWyTb1yEtD9mcj47bUkKhyZ34GnP5MozYM3hKEJoFgdiigU1ZExLYxUBbAAC6594H3z6qv5npP3TuvN",
  "key5": "5r6vJLNnztDbgqZjRYjp2HxpsEpqS1KpM2suWM5eYhVoxPFdjDcSj566JdGxzEqmV4pwKz3ML7W4bJZmqB7EZjqo",
  "key6": "4PR7NGURvZMrpMwFz366bumPysAdZqRLKXnzZgHPNuq3S6EgkrQYzCxQ8bGAq1Rof5VMMFVMkuM6biZF97e8QGY5",
  "key7": "3UjnyFokYj1sMhbKVZjrPAtW3Mfppm1YxkV54BuWuc4t95UB1WYKTpBXM3K4VDUQg5YMEZwM1VtMNHdkAkQXiWZe",
  "key8": "2bn2SkZxNvaobbRPHnPbeDsX5jJNYHMS4H5cJpCxdbvCWwqGjwfE8D21YE7wufSeyoLhyC3gJCpHjhAX8m2rJSG9",
  "key9": "2aMoAMtqybxYkJ6vF41GHDWRrhzxNaDfvHMrsGrPwgjp3YefhWE79JGSA1grd7s5tPuhR36X3TcLejWD4DJYxxje",
  "key10": "2kbxWRPsHDmsGPbjNK7xuEwZTGTFcNaNmRws7ZUiWPpNa3PS4JBc9hedx3HY9rYCig5Kc2e3USkaYpdtXm3T6fJc",
  "key11": "5Yyxu3TMxZDfx5dgUcMYsgbb3Fgpww95meW2QwmdurKt8de9VHN2G7XvxBwrLFRF6Jb76wkNLsHvZwyGNmDhUx7r",
  "key12": "36C8qZqGZKTq9w658bn59eb3cq2f8CzTyZT8tRAX8W8uLKYLJTqESUa8KwudoLLFGbn4F7AwEo2TQ9phBW1wGPzk",
  "key13": "3FLbgWErjKbQcYZQeUxAgeFY85mStaAerDBWocVZUnf5FQb6ejeU2XDYrFKdhh4P7QpUzwSKL7NEZH9UdmwPaUg9",
  "key14": "bJTTWZ4VkgpG2gTj8rv1mempY2XkATi1Qsgtqdxabs4fBumYEgjqhXHzizP5rz4km2uEUTYiBgziRxeyrsaYdMY",
  "key15": "33Z5aaDgrCZVakrDqKYiEapCYDa861RR1PQQ1RDquR8EA2wHzHskRZNMRTozjDi4BBbSt34QXcrEp2B1f69aY21g",
  "key16": "59dFdXzw757WSa5rWwSnvDHN8XBd3Ko1r9RYKkJQBJSL1P91i7LWQhkCiXvtpZKkZwTp2iV3GaZG26qpRtZEaZ5x",
  "key17": "4v9CvV9mZjjUqhrjHW5ZPMqdtwYhmhc3GAhyg86US7CgYGkY1WFZKMWR2EiM71oHe8stKzMazD2yyvfKnCP5aAxF",
  "key18": "pNNsiwSH5cs3zPzXpJVExg7oAAJatYfvsAGxVhXqKA2uStkVuUUxPGQoHMKhDGbu2QL4pYaPj7ySU47v8mRokp9",
  "key19": "288xATRnTdTFM27ixtJ69TjExPiyXbmCwPaetdcv21STr936NnbmhXohiyBEmydT3VaxHt3KZ14V5wz5SFhm8Hwi",
  "key20": "3eq251zWVyTNwks5TR3JpyAjg3iwpdRKiNFZiC9XsQfJdV1nUrSTetcwQuJvhaKxjzMR7jrpdMvwYQSEAUBSCsfN",
  "key21": "2Arp4qqP6YohjsMTuyr9D4uPuYnopfQ6LdAzKycizNwoCRDxYyS499AY3c1j8e9ZrePzLRy8vQcxkqvG4HmCSKnm",
  "key22": "4qefyQY3XMjHzWL7n2NWFd1rQoP6f2gNwravKFejsmi6R3a3uXB9BXrTu1oJdwaXRRLEt9ZWLGyixJdAhFsGk9Vn",
  "key23": "bwj9gn54Mubdwg3B6a2xiwEQipFm5UoHw22Vv3cu4Gxs8VakEWdZ3gaZsUWRWRhaQVqsuftL95QiuVEDLHJnXZC",
  "key24": "3kCNeTKe2zr4T6kNk6AHxaUeiwwy7LdgZmwtFK9wPTcbN6SxqhHKtswr8wLuubAqCBG3Eha8GXz1XCCbGo7w4jZ4",
  "key25": "2B3iCXTk6pAMDVEv2RWg6MfARKsC7xUxhNSn7qUA63pb3cisomcfdzFoVbukNNa23zJVMe8sN3fBMSUn6QwPucL6",
  "key26": "2bM7MysjVtiSAUyNnsMQ1d2gXJ996eFxnr1muCvgVXEBNuwvtBMiWXUsCd2w5ZjUXKHV3EAFxMSse5R3giSXCCtC",
  "key27": "5XWujppjyoqY5bBA7Se1QXz1ZZxZmsVPfwJ9Pu1DMUyvr7PT3xCfpRtXEf6howDxrgJxTKZnpPgipQnBoBBzJmTE",
  "key28": "5gaErzd2yyo8Wu79VtNutnNjj8aD4fcPakwZ8a7uSgRZiWcvCRM83nkC3YreyHJE5SygK5r9jNcnYBmGpwNh5P7r",
  "key29": "6qq1yRsDYD6vqnMK3qhZajSz6YRFFJAuKZkZPWJhXjK7sK7X3n43yGcYWeh3e62RrhH6dD7VBy3eiDp74WnB4a5",
  "key30": "5JGBm2SLJbob8Y26Vcfq2LHEb9aaPNVvafJCBgbhBTa9xsT5mn4KQcQabR511iAne7PhUkrbBNLPoU3irwbYYLm1",
  "key31": "Ybbu9Kk5a19zUvx9Mt8UyjEc4gLsFWCn4EQ47ZHPsaWxPKyVxitE1u1JfrBiN4xJWsDg4D2jK2eciojfdGnRyPM",
  "key32": "VoC6pBbXUxbxahaGq736MA7cz7xS17yX4DLA6aiZdbtR9m6rxAwK9vNyQNHKHd7Lmk7bGhVD3CMSUEuTKB52YGf",
  "key33": "2WtCwTDMkLWN1omeAaEPnZVxmnaSzoaYH5STnauCbF4r6fj5pJMp8JaSiLhjjtfWALF32fq1BycydC737AutZ3os",
  "key34": "2kDRRLifETr48pr8sBuLyYFqz9gwRr3zp4Eby2gqP885FWbikCCFCR7crbauQxMHuztbkYHLr1SbbPaokerfCpk8",
  "key35": "5mgvt4hewweBsXe1wY6AN12syhaPnGvaYRXfEss1YGGQR7v4Vrf5jhtxGQEyBkg1Khc1JKgaz7N9CGXFBMYhheXW",
  "key36": "2zWaeUGViugZe9tta9VM7xL8XjR6PXomxkpVdhFb7NNK7xTDRccudv5cQUf6QPidJXNnmQTbLS3LGizadJXKWC3r",
  "key37": "3N7jgCPnxXqFDzwMSmcLu7qaz61C9ChWPVFrvUisrkS4zCnwBb5eyXXTit4mgtszKD9WKxHHgNfLyqFzf3xAqt1k",
  "key38": "DZ1yPJs9KsGZTHhHCQwLH9rMfVbzj9cvLvJgLjDC3PXDQx2qRdRBS378UdSBLSXJpvRQ4hFdPBLqGK1msktFPzt",
  "key39": "2r3NZcWQzZ33pJpjZ8Kp3fYPdBKiToEEVPPvZg6AzVNXvEp2Sc4YtEPTroer8wDBy3LCNPNTyPt8vMMqanbnY2F5",
  "key40": "52gHDaETcMr32pdBYznQqXC954HDQSAhxDcdemjeZWB15R3bmTENusjwpCDUxPX77VNobEM5tjjsQdjYpoxUuE73",
  "key41": "2Nxkc9bmvbxTougFtzqugVeoN3gXbuPr19ifjzYWA9uMusegoMF87zjGgbXnD3uf9WnPyVyw6GP4Sf5YPGQgvD31",
  "key42": "2UrSrDvyER3CYYn5VSJR6ySa5AoaJAXSqEehjZM6djqp3sUaBWLWLWPXVxaPsBGYE5ke3ZpbK2pMZALZyW7JXxV6",
  "key43": "4fpRWSWBpF6duNWanHMgZv19qX8S8hWqonCcaFq315LUuJ49qESmBkRDKyarqbndwmKRg747Jpx4dBJQvZFiC25D",
  "key44": "5iuZntde2MhdQ7MM7Sa7Rbuu6kDVYLaqwo5xdSwBAyxpgCemLVJds8aw4EdKmw8vDJdTSWkVrF86RkpoVsvqKaHZ",
  "key45": "2JfmpWyqGisKUSpAijNdEqAEESAAHQU9DEEU6XjCUruCHLYjqxTfwcmdfkcQtSDBwfRR52aetX6gnnwvJJ3xQJct",
  "key46": "4be25DQVeAqQURgMtsRjfHCuJH8ra2c6fYBw8ji5q1qdaYLGX8YYbYVeEbyPrGvXLnD4UtJW8qXUijXgNcmfcTkV",
  "key47": "ztECQf85EKo8mz3H6Dfe5BvZ1QBuQvM9AFLUiSgeUUngp3E3g5UvSrW3HvKMGqGhFjR2PFvU29YF3sMxjJR9Fa3",
  "key48": "49R7yFBWbssRqV6waZENDq5RncQu1f8HcDmET7YA7G9ZPJ8uiQySCY9JGWxiEQhVSCV5WRYSAZ6Wqzayguz9A6NX"
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
