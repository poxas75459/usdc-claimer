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
    "mcHZvQQRMF4ey5Lmn4LmLkhWwZxHykmyKbGLhZjQhS1XxTGJcWNMPgeebWqmYsrNwV3hhxtLLf4yC9iZKLPyDR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmNyGhFB8pB93M8yHbq3F9Y2avdNRJPZhtGJk6zHi3EDPhbCZtWujagyWZQMyetBWvsfbTS8qDPK1mr4XqXnxej",
  "key1": "5F9J1R1nAFs3QnU8M2zESCAwHYjEuF4HEmvyTwmCBePAEPLdpXbvbdiYudgtcrEjopi63jPKg3cBYmGeDpqygufr",
  "key2": "5XV7pPmNRDF23XtcTLporwgffm9iHnVMFjBLhoVf9uf2pJAbkQtkApXxsgwsAQC7ryF24HiHhAeWWMb8fcwoehZk",
  "key3": "5AL4VFygBCzCmyWgZ7QuW1YVKgg8KAip34rr7FkESxDp5GKDKgDBEAkqMRb9qvHq1DXBC17P4oQdHHz8WrRuW3YZ",
  "key4": "3Eoiv1U33D51iAZqbMXHakB1NDaCcfVW8djFQTdvV4Q64STbozzDjPDXpb5wuARvLeR8LqDxRdZzMxAZ7pdHbVx6",
  "key5": "2aFdQtsQ9N3srCW6eErtJna7o7VyztWAfz1RtNG12DzkRAjpwuEH5FcA58SNAYNrKWCHDUrtkNAyNkxoGT8ihZkf",
  "key6": "4j585LUhey14TXzjt9Cp3FXx99pVpydj3RJf8EwQ1ff17qPyQndsq2EERGfqsUDELe73emRUgHPk9uSNCBF3qxqS",
  "key7": "p13wzhmScMdhW2LsjUbYwouEj6q8LJ5KXgYsaeNbtaSJJCzVSREx5sHuek6d2um7YspHERy3UZ97U7ab9sBWqzi",
  "key8": "4AeatYSCQnKrLk6U15wQYdHrMvM3ZoWhP4oThFRUQL4QR5MTQjF6irYYSgFgrnhuj6evbnxXAiR1CMnnPctgDJT8",
  "key9": "3jVq1n3cP5p5F5GT7FhFP89Pn5NgFSv8KLkyLwqpbCB3rCYussZWvo39gmRGxTNEbRSqZjwGsEMeLcWs2Wf5R86w",
  "key10": "4nuemNkjy5KyAT5q54o5JZohMdK7YNFMgDYmVEQJWoAfjaV8QvaLdJNGwz2N8hHt63hDspaLSbabugjesZKAb9vr",
  "key11": "5SysC6jkHMkWfRH9GgePwCtVEkmwfcnpPmfwKUsvzzhWThTdQdn7UFa4eh3owpeDZm6dn393GPQye2CC9F5FWQXZ",
  "key12": "D8XwFvetA3oa7xY6iqGqU7jsHPHNbdNbQCM9soRFPa8if1ZZaEtymQ5TfB17u8bP6oDn1eCZdMUCRggmNApi7Av",
  "key13": "3rB5qHwXaUeEPR6c4ft2xwDgUonWM3FKk2o2MxPtPSyXhmRNSfusBCD2L5hsFf7ENFuAPLnnCKzUnAPDxCiN7oxE",
  "key14": "2PZ39JF5B121fYyby4MyTowAWLF1PhhUMQ4ShX2oPLz6sWQKLDLzVJoEATXxhjEZg4ihyDw4jJYrddRc24DPKUiH",
  "key15": "3XCgrX46MT2VDrVsBa1Lnk3B6EhyY9hi7ThsLwFKoubTjW1TR6MJwdrUJxzNmAkfJHiFdrvBeHuidEiKwXJvnWdp",
  "key16": "2yPkud6H2BxAViiwtHYX4DLS6QMeDNRPZXGgkSAXkZDyrumWxi6J452ATvvAPLrKM3bT4zFmvSah5BGoYkTzFcek",
  "key17": "mVyJVXG1Djpm6vDV1danrsPsfi7nE3yrepTdQYTZK7PqkK5BxFxonJBce8MF8xtz7NjRNVpzmpox4wG71yBv5Gw",
  "key18": "4Wz9DRn1Uyx4z7qE1SPUrijbSDYyz5beGjWgSUWAN5juM2vueBmdjbJxp1PfSWeuysP55kraaxdMS6xBcPX2Svco",
  "key19": "mNCRZkurdgtMnB4L3jLfALuJ7dsdFZEDQGHoLdEfYtqwBXwQr6m6rh4yUu4VpBfFgjGMuNWaKt9cAukxLC8KXbu",
  "key20": "3nrGNTZCScCJQvZ2FePuT6WrAkcnZ2qTXkXXdUtZ6K3p3W57ZB3eTVxReLhXLWTuFTtSkL684ycSCzySbEYAQ334",
  "key21": "5vJFEQDqZxXpR2Gsc8yji6f7pkqk2wy5PtmbptqXicSsCGPyMSgYWS6mzp4pMS8xN4xn7XcLQGZHmjYfdYAF4Sz8",
  "key22": "3pdZ85sms3rwEns577MuTAaBi99NfwUfQf8SsbYukANimgeNm2LaSaEe5vVzoko4wfXQA24pTpymW1WZGqMasWnF",
  "key23": "4AyZqJa9a7wdMWTHMjjSr44MxzR4TUorJamhzqTNqLw7XXsquazgsqAB6kBYZNBcGCZ9yXgEmcMN5o6bKdXvdWhx",
  "key24": "3RYp18Jz1VHCZGom6En11vr56PmxsbvBw2ZQFjgFquRR9oXm1kc25z3nAgfGrDwYvVUz3AXajkBwph51kqmxdC9X",
  "key25": "amTDYsaKpX68Up9bvKFk9UhvRpXqaSnvaE7ist72MLee9N95fEQkZfk85Xk7LvDLwC5grWhQkcDtqLPRmkpVG4L",
  "key26": "657ajLC3q1SKLeczrSPwm4Vpuyu7DgYLZvZoG8v683qMwogenqxedik7ZGgjmjJU3ydLM2AcyZcwvDdD2dd2CWKq",
  "key27": "5X1MuxJsDLJo9XynvqELAFDmrjraagYY5a1TzmjSHdNJd7PGHrwBNeiJ1V3Z5FovmZ8NzrbQLLR1UJYFFfJN39A3",
  "key28": "Jq3sCa5pNb9r3AKKSGBVLVNYh6njviynzwWcYPMTaFoq8z7996HjcB2fKSJWGm641Y1mhaKs6CsEBxufH8hPMpx",
  "key29": "2exYx9tGZWC3KhgygfEyhAHTUCV6drsHPpW1jWQ8cWWXab6vaiHVfsLGvnXSCWLJ3xSHxqMuruCEz9DnZQuaoQhq",
  "key30": "5E5oCATmLUJf9X82eWKEvGE89YCjUyz1PxJD7yzWYjSM5yxadMwwtbrUzxBia9PgPDfc51z71e1UsP9woLvgC5Ut",
  "key31": "2ksMJwZ2ggEzVhz9ab51hxNj1zwFj94sFEZ9oAxVWpVQGy4yhUZviFXtheLD1i8Ax6RVVzk2dfHGCerxhbZkadvZ",
  "key32": "66a7tsFV4oL9rjQ7Gdq3dK9pBuCuo2D3n1gbjx7WkughRETp9ady2v4roRnuvvaxoaw8xbYzqxwVifs6buh5T7E9",
  "key33": "4pMdHduhBncoeWJEVSz8TdWtXe779tcpkAXAan559bvfC1Tvf4ASris1SGgS8yjea69FCJwm5rCF1jgYmt9YU7eD",
  "key34": "Xy8sHitZ2e7oKUGjePncgSVhoqYN4DiokeCjYbT6jc2LZcvV3oT7U4d3KbinPqFRd5dWAeA58EbLdDqmBmTYg62",
  "key35": "2fuc9X4mppDNqpZnY46aQi6YwGgvBK3RQ6DMRnRoitKAXbbjAkDowQx4HvnS84kox7LiKKyz8oup9JViSheUFPwZ",
  "key36": "Y1vMuDwMJNFwdR8s1Ty8NjyXDHxDjxT7AWKAbzMB4wCETAUKtKjztU4MansE96bAchdhunveWJkcHRCcEJP4KhH",
  "key37": "SoHmHcKwJZQMCzrhyy4HhGxj1LmPLxyrrz35ss5D9BydkGoJZm2CTR8v2wzZeEsZSohfqkKpK1n8XwipsVoZg3u",
  "key38": "2zvufVrtScDzMWJecgvHNYxAbhDHnc98HfoaXWouiZtRbGYvmR9FitNH78NYqYWup3N7M2hxFMbNwZ2RUyXaNWny",
  "key39": "3MoiuLjnVoMiQbryXm8QwwXxUQG6Rn4f2pjg5braowJThQRbbTmeYc8SSd7hQ25qRm2jtSzdyUu3iissXxpspt6z",
  "key40": "2Hq4bunsbSdFS7E896dJyBM9V4c8HfkmFCj4J5GUtS2kp8UMMUhb6eKks7BoYq2DD3AQbDoEj8ZdKiUyzyxWVWr1",
  "key41": "2fgwYvKWgcQidUvXD7SA7rtJQ1FUxa4qCPoMGmn2goWXi36doxsnRH7r8UqTsGegJHrtpZ2FKSkdFh3vBce1Z55d",
  "key42": "3yQ6uamxtvJHHptjxH3SrkW3WLeAGGc2jCBXHb12tGCLGn3vu7FQFPWioHkHiKdi63qUbTSH3TXhhCHaS4p9x25E",
  "key43": "n37NriLtVsrMQnSQ3a7JgVg5zeCQV8Pb1WCaFimb2WwZ2kXNPwKYB6rftamiU5QB8Ch8a2YzpWkWsj2txTF574X",
  "key44": "2n52pKdEDPzEseaUVFduuofARuP9wAWHjmyrLn7HVLNKPdz5CEfpmWpuLReWnwYEaESBycktuuCGS4C8MVH2zWr7"
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
