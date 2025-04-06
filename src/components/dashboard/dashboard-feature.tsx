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
    "pYHLw2Eh85TdxcJaBcqsusibmas3CZowYMnb8hTM6SQD3dmrUDRpRq8UieWtydG2sMTMTX4c8akC3BQieVj5Ha3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWhydoT6z4iKq7AW7jq3XqCC6Q6JztRTwk6FpyN7qQVxSAF5mJ6X9WNqwFpibimfjRCAWbp6iaBs8AgBFESyKbR",
  "key1": "TPj76pPrM7ceJZ4gSABudoPvD8f9rctDw2aU9UKs1nHAcsLxkLtpRgfJ8aMjqkLSBaw5LaEhpGmtujcskDAdUiM",
  "key2": "2mqtuMY3RAxbmTsae1jCPZUxBqtvSsyyJFwqaCFMa6MhTTsDQcthTPKGJ4D4cA1XCAcvybnr1mP3yQa94hC2SEDQ",
  "key3": "3WbSgvfcSgBqXLKAJwnFbpRMjygGS8JycfWcNFgFmXVE99mtYqdX19wcKHJAxfyXBp1M7XfEFUEgY8SysLXD4Qmi",
  "key4": "KasrqgnedLc6cQ1ontAvWtn5xzmrwfi5sGadF4WgpAFKKRXtKDa2YD1Sjqz72XJdPkDLfeURvPt2q2Vx9s8dsVR",
  "key5": "4YADYNzWiuCkFxSa8rKaCSG7yiU7FhvQmsN2QvRGyU653NmBdBEzgXCdpx5eGDRAwquUB4bD36Gu2jfkwVAEpmi1",
  "key6": "53PB6AeNeGFR9A2KD8RUPPk33qbhrEisGVLE6H5DUkMRfao7KzsSLxSRzqrAVFKT9Bewsx1cw6BciyAxQuyTrbv6",
  "key7": "3uFVkc7L7dbqTeMD4zHuzapB1FzazcoGe5qiseyBMyDvWuYRw2ygPANXNPjtuLWaguj4DbkNzdYomsewysvsDDqT",
  "key8": "2EopeTsvSRKoQXgGfFUvaAA59dFRyWDWiSjzHk28az84obzPzG6pCU5W3TP7HcxLe9Esjax3HytaAN12vR9dRUT4",
  "key9": "45nA8kTrcCBHyLvi83Jkb1NRywhBuK7pnyFGTKgkJM7MbZJrJkEKrfmrQgh27Tak83zuepDap49a5PMgGWxk9zPK",
  "key10": "5HpxGELo72Bowiq1ExALLx98U2wVfPZWTivDEf3i7dkfwnk33ShE8D9k56P3Q2PJeV21fgeY64Fz2cF21npqgW86",
  "key11": "2mo1Eu1J6Co9NdmTVFZnuB1UZGjWs5jC1N8N8V5aasTNsCukmBHeJbtfyZdhv4BBNLVyatWXEnaE8yeMbyfjpNzT",
  "key12": "41383UxiThdX56mUL5zkRisoj7DtLxt1vpMzSW6vU7Zpw5Q9aQgbfmajSeuLYKdTmkqpBgY8pJkY7RLr9S2LutDE",
  "key13": "oFNZaNRixVBgLPiEFZCtPCjHJnfButVmrCFwWShic9PcPgUKBLAAUwcwFVGSNSRAUcHm1Rsbo3AscYaSNLmZetw",
  "key14": "35AcGcRoJ5q9EiTneeSF7uN6vTYoZGBGrF12nAtms4hAZH8Jvpx4BDqc4Yq5Q5wsmbdb5xS18Zqpvd9HFpNHWHUy",
  "key15": "39RFRrBJx2dV8pzNtBNsBp3XnDnrrccpNymncNtnd9sgauTEBxZxwEhwVjqtq4NtUfP6Lch6siTEdJFc28PEURg8",
  "key16": "5qTbFWqsd1v7wq96ivtVr3b4WSe7b4ZBJCyNnMRCu7Q3xRPouUtyAXBXXzjmWrmkDvFKLqPjhQz89iyJSX2cekAP",
  "key17": "3Ar8mtaAZegbVsGiS7cqaSCrsitn5XAbWww6vTR1Jy2vaVkEbnD4iij9vqffJjv2A9NPcrtuMz5PT1VVgSvhq2pi",
  "key18": "2FnUWGXzUdz4pJLNo4nBq9c6oGuTApzBHhowAaEyLodQtmL5RGsX9A1Qg2Pb8wq1dNwEkmZiv46m5uoAv1NDoQ1c",
  "key19": "4x5NpQoJm9gijKZxz74LdjWy56wRvZ33Hc9MFxgR5qvfwCroBdxcYVKnyV5Fsj8yAtpGwdeqnQZ8ZuPtK2X8h524",
  "key20": "4RdezwovTytwLt6QJK9RijWeBpNLsKqgcveqdmbPXfEcA3s43SMMKAvKmQuN9t9XyH2XmtnY9XftYpKAwzoQqx3v",
  "key21": "2mPZJ8bk1RFMbwNat1C3ftTfKhUym5BkJubjQnHxFeirGwJDQWaPPsWLyxfpsp3qYCXQxKQzt9QF4ccbz6hMvNud",
  "key22": "4khw9zpPvuFs5w9Th84F5Q2aXzsfoQbQPPw1uBHf6niJaWS6bSDKMbAoj1y8AbThuncZncyth1jhTWUACBDAvarc",
  "key23": "257jqTDkGygamo1GzLiGutr6XN6gA7h5isoTgDktLYbp14KLfdBFwDWRdPsyvHYE9JuH1y1eMYevtYZQdTEXnyTu",
  "key24": "2Z1LLz5S9tKfWKnhcWumzyft8EkDsFn172CFGH3XToCUaHkukW47hRudtj44SBuFPbsaSQS2hHan5Ajp35DzFBvp",
  "key25": "5iAk3165qYgRTFkyrvL6WZswycWkVcN6CJp4N65eon46yVSSSy7gg53dGNBxcdGGW4nFZVdsusCnB4RpU87RbG15",
  "key26": "DHxoWd7dGpDsrmdTjTLZSHnpq6NeQmpHzfHecQckUCeoENvCnbr4HpFFPQvjN4pVCvd7RZuv5KL5gVysWT8aQL7",
  "key27": "5ueJzWf7GmqCTfxvFM3MztgYBXEsRt4t5hyZfXFTY1f6Acem15acZn9ChkyV2SDoh49Fwa6eFh27NoWyzoNDo6m8",
  "key28": "5MQh6oQhBDPuT5XCQvVmgCru9Sv7U9ZtWrkr3nrTpnyfFRF7ErgbCTJJvwNfVYYCWHib8Jx8CFDQK9TtkpEdNqyY",
  "key29": "5ALmnFingX1Ec93XHVaa2w8HZJptxpA2VuUqfu2YBGzgm2cyRZWQD4ZFdSGRRtr81mbvf6bWwjMwWNmAroYV8z44",
  "key30": "42CbPDCvcTaKZdgFTCRtmBurcunhozHYeXy46NPQvueMjU8H3sUvBpDqnMdAyKysCJc5oKkRCd3m9S1AHckESRYn",
  "key31": "3aEvUAYBZPRjP1xu7osHvbAB8KHB9UDzckMzgFSTi6Bfw7i9qbdCvmzMdcRyE9Uh9QN7bfjgP3P5cXbpugsfTXJH",
  "key32": "3mjtmXpmopK4LgcsJrDVGKrkC27CJAJxd6bMwhWSt5W6okR5bweKwUyapBcuGozncYfQiiroUss1PcQmNEEjtnV9",
  "key33": "3924VRriFGiCyye1baobTYmNbCYhtxWs5fADtqvhwAu7zfHBWCmGmm5pQya3dZxMA9T6vG3sHFuth9puKiBdseCC",
  "key34": "5r37snnFKYBnPrTwTM8EYEaCj35pWdTyRvbA7cCoG3oyhF5kJmpBAnKpZmE8mJH4RkZc5FNpnqk2jyU37kTqV6EZ",
  "key35": "4YTD1uv35vsmmHmCCDbmdDzSbNhiYtWUiMrGxxYVJSKv3PApVxSrecKsMAS2f2aBwXvCKGCy9AMvuRjwvbBAu3bc",
  "key36": "3z7PKhCnyvBGrtEeY556EjZWAkoiT8t4tEkEuSgUnfmFJRPP7xtn9KD7tTyhyoxRmKwANxrBoMjrarNEMdWj6Xq3",
  "key37": "2xfRhm8BD833ekN54hU9pbfvYimDXKoJjTov5q5kvZT8P77RWsPLqwL1WshgSPA4SmvfwKTsRedn5h464U72CDXW",
  "key38": "ebD9PNZn4UMYFknnk88Cbib4VcgcTu4hfnToxAqHVPUW6ZShn3cfHNdZ9MGUYPyBvXPWkTDhZut92crbEYbCHJT",
  "key39": "5PfrS3cJ9toCG5SpzxSNUBK5uxinXeVz4kFvLLVh25mujwaXT8dpRr9YNjn9T4szCenUjDVSzFucxBGX7pXQmDgh",
  "key40": "2yCja3ebY2LVLbfW9qq8DQTqsACdw9tP5NxU6thuscP2RdjLh4MthBcpMj8oweo3E9j7zQZQnCez1UL7WUMsj5cv",
  "key41": "23zJ5fgqvr2vG88X6uc9eh1DaesbU8JkCY1qsHdcmZZyWTyL3bJ1K2t9PPQxP4zQdeKo7QqStBwgeAEcQ16HrWA9"
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
