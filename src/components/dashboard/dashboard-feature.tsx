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
    "3VTqiu53EU5ASiAtgpdp6ivUVPJjKt7YUv3Pb88KMPQuBygMo5GAkn9U9U8bxQ7wVwWruDaWuVzMRViqr78gm6ZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318cGSMbZMuDaVGCWEeUNNtLUtU4vuGXHpUtQP9TUfodFCb7ATSa4N4oNiF42aYFdQopji4D3Pg7w1n3R9ZyPRML",
  "key1": "2EGnEcP8CMY44an8EjtgDLG2cYcSEXZZfyuvC5XE9iewPFPt7rthoXNeKxCEAuRjJD5ceRowfT95S2BTqqCGQuyu",
  "key2": "4Ui6JQ6FwHBj9WvADcYDRGTaVH6XYkBW23RoBSDwoFK6NTXHzraNkAEjHELkTSBudUQNfLJ6BE5GB9LpsK4Wx3Gh",
  "key3": "3cKd8VP664VN6745oyHB9S7HgwqRPxpRP9AKQ2BS2PPiGfehCpqK8VDPSzRTjDn219qvfHzd4iBLLtPk1qVtEN8e",
  "key4": "3w6YfVjrDgFyWMArXDBC15ruyLqmiHQ4tTkW4ZvWEQfPrP6VnYTmoEfuEoHPvNQAjkeoHcLVt8JQQtxLhtJSd7zc",
  "key5": "4kmX6c7XhK2GiuH2gpL1UrYpvkyYJwZthwpZerdxr2Mj12PotXatLSCGeSmywHJ329SiMaC4PrFgScdm5hnytKWz",
  "key6": "JpP75gnWhTmkPnAvCzWnLs9PcvHPWTQMwCoNjUetFiUvTZEXtURfkj2ThkzbEXJYNQmZAoJp8MvKeuxUPo4kV9G",
  "key7": "3bh5SVe9akAyaBeihsLYq91ybBQXRBpvN14Jq6CEUURLT1176LWiNA99d1b2ZPQcvpEWuWwEczBBmgwN5wEPTECj",
  "key8": "5SXf2BBkMVcvEFBJ6idgkr8TDRnC3DY8rJgiHuNgTxHpNYsuWbz3uQhRKgTWBk5CYLehwYD8eDTCeTNdbdjBx9ka",
  "key9": "5VMCimQ8XL5bVrZnRJ5iDVCTA62NWWjwZybhAK4BN8ZPppc5Wk229XGLT1GvCm2USVJ1QDtZUu3VdwMGrBngfdPR",
  "key10": "3UYsTzQcETuCTTPxi22jkzggLFqo6Q8kGarQ4wUhPkdArSZ4ZmboNtquwNRMNAdnPP3L3v5iUM5RufcAoWBKZ49K",
  "key11": "5uv8Fpu4uGqfzf7HK43pFNK2jsZd6GmW39WNhSa4uG9U6W8ipDUbif4Eexv4o5qySBerVA9aVmEUSDvi4xNBAxuw",
  "key12": "3oY2n9rB3vWF5aVBPnhbcF7A2UStVrNZ8s9FjWKJSjzys1ZRq8z8jtUBVZEtSCSCzsSN22uzYmuiP3RHZrLtXwCN",
  "key13": "2YdnNPeGYbSM4jY9FUdqGP5HcJDwCj6DLEHTKDE8k2ZYELb7W4SPHE1MhtmnWWdFiYXVtz11uJSqZYtp64ZYCLxs",
  "key14": "4kxaXgooUgXQuLCzjEaBBL6tXhpVrqbZxM8PysfLRfkKThe1q9cUzuvuDvvauVTH9MP7PM69VC67FWwJjNbcaF5X",
  "key15": "3uiFt5TQ6MmaTy4Zf4YCrGZMt9Js4h8tukFyRvvNYsHMZMnhfkxwJU4MiYwUeVoPTnsh4QS45MzeB24EUUXtBPFL",
  "key16": "5LJ13PQiiR1v7AgQ15F5SRkkSoQvMc8589bfKbaDUKAnwSvn998hJq6MHm2t9GTQDuUKgoQdJjivaYXc6pNRYK6A",
  "key17": "4PbKSXANP7PSFW6vGtdinvnaBukytxsSHurjyif6BRGyoVWXgeVPgEKNXaALsQ23vDRwsSAKE66exwsNDoMAByi2",
  "key18": "2uVUrWZDqnzhAwHwewWgUTUmk9K97nKJnEGGiEo6Fch9BV5kzguSaz5d7aFhJbBjhYKBYtfavxbmWvUvi7DPpijV",
  "key19": "48PnCrYzSz66Qo2o9WT9Jo72gkto6N3iwEkSYymQC13rmsoPj4ZBjYdqXxQ4A4z6Coe3TXTxazmaqFyVhma4MsTN",
  "key20": "4QBniRBoBjgCyAqSs9Yjk61kCHtRyzjiVJKqUeYGLNMSqYttQWjJ7CnVtDeQs9HXwkRxv6RJgsd75Kc5wgo4u5TX",
  "key21": "3iUu2THjpwfmTWcdx5cimMn399ZzrSamUxPbbUQXrfxVWgE22DL2oorQN11BRQp9wnPo1NtDMACqZT8Hh1JjJHfP",
  "key22": "4hFovKqtf6V1qyDBy4ux9MS8pyhqeRgBpy2MYhcJRrwb7iYCCyMsqjxi8sg2mGTaB4n5NwYvKzr9herbzZKGYn6L",
  "key23": "5zk7TABR6xCf1myghyKvP9ymr6ougJ5oWvvRaSUEjs8enqU2mDTGCrjEYE4ZMDtmiEbGroxdo1wy4j2fh3z58mzZ",
  "key24": "3kQb8fpmfb2mvc5r8aA7Nky7Yof4mQjxLh9unUkQFGHzB8Avfaqm6sbcUtubsmu8Zkf7yNorPg8KdDRSw9ENcEuk",
  "key25": "5kwjPzjfZKJNL3PbHjHthed8QXSdEmgDWKxqbqZyuBKQWNy5B38yBWn5hBqoA33m6d3RJAY98gZY8LgharA6rWqJ",
  "key26": "5xmgxB1bzDy9Ss5neK5mb4WgiDr1x99fpY6fAn3tFTDXLbn3XbkuizMeXTXR92GzT2c2LPXpYzUWsCFPBVry7qXP",
  "key27": "5M9Qx9ssjFDLKQm82eCTw8i2H81jAq1WuQZoMk4xKxcPLEKd9HmRYYVs1QedRHGgWzaWZ1BENwzbLH3YRSwZo63B",
  "key28": "4ToJE8MvkTcXdhPbWo4vnPYd6NZKDHeM4EiKuDfhc1yhpGSeE3XJV12NZS6vrt5wQWvTykHpKXRZ5etcCZKXBgf4",
  "key29": "vaQy8WrgLofXiZMmyvraEZypr8XMQ2gAZA9inwovnq8nKw3aSm7DdsZ2dFmbXRzSrN23qzGEFTHKywAu7GCSyEN",
  "key30": "4tQnTxbbLjHnFpRswudfacQCLTfpNVjGwqARM6HFhXR54veiK1v7dhbLXM7FLT1AChi5Jv3RNSwdwfcVAqyt6bNE",
  "key31": "4eTWj61sBfpMngrEGU9SJv7KTG2UVgnizo1V2CJBG3VheDgNByYgqDCWu5GYNdDEbwc4oTptWfFxnEudSwD7GJtT",
  "key32": "3wd1XX45pYz8ZtRSPyfbKWsKWCLFz8a6W8Fma8xkM3JUSrxEu4qvSGYBibh7nF9r1pxxXd3Lq4JhX2ZaUa5tEmxu",
  "key33": "494M1KyBbGaKSMEREKyMcBzgubXiSd8LczfAj7up8tGjxf3Rq87iLvZ7uXWif64EaksvjKzVwVesEBHCKby6Q8jA",
  "key34": "3Me1SjyickMpfQcjD1vAPAX621SHq5D3KL97KCrmhbgx1gJv2q4F3EaxTrhpgWhU2fjbeZ3rYrmJ3PkfVUEbHseo",
  "key35": "YHpXW3kvhYWsPQU5w1iFjuSuQyDsCQP5kUSZvmL5CSCSPjr9d3smD1sDvYRvgiLC78kcW3s83KVPQ1NZSRHqiGT",
  "key36": "2P3DX37yPt5SUByv1K1USq9Eoniccg5f1W8NZSgQrw2mJXgFcNMQhrW6G9avWd2NMRuRA5dwcctzoPwtK1jcY4Qr",
  "key37": "4v2kH1YciR7K3k3AeemkruuTrRCTAHkwNW6AdRhBX6aQH9BUYSaLeLGskLJkFxB1q5BwysMq9MbVtgzie8Xknr93",
  "key38": "26YRUVATMTjVsE6TQW72rV8KYdLrpbASgdyUi6cLjj9z341PPrvgw1iJw4kLRz1Krr6f1o2rD7Wo81fnCCg1EznK",
  "key39": "GACndmC1LDLLp66oW9r6mAMPh2zwpYGDoMMEFHsdb4r9NPb3ugdhi9esxyrm9Zt2nFEcpJQ1Mk4z3PoQpHXryed",
  "key40": "58QtjELUp77jvpkqiNsNijU5gnA8Xhxz97Aqt5gZTPYVUue81udR7nvTwMbwPiu4DH33UxrdoYVwCyR6w1bnns1h",
  "key41": "3bFkgEuCZatzgW2tSfq1JTwazM5BQMyzShveQnfykFH2jwCKs5hHVcoYquToiGNRYxPSgab4TResDDraPcSb4xkC",
  "key42": "Vmr2truT2YRkmB95Wbwrk9FTPPhtsaqrE1WjCMwCo4dK7hNBZkqbjEXaJiFSg1phNPaDR9k7zR4HbZgVJoSJf3p",
  "key43": "4tfBjgoV1RMRBNetffoJMQ6PDgWtVgvEewGH3wkVZ2Fdtogj3TtzYgVpKJ3EG3t2s2Dpduy6YzcJtytYebQ1q1i9",
  "key44": "RZY84hUubZiLfKLZwWH2YvXVuMGhoJmDZCc3zKDEwHNXZppnwTiZgRkFtPQUWjyT7GNjhQ94Pgr8qD2pAuV18nf",
  "key45": "53bysLtgWzK8c2Xcko7MtXKoshXXAyJPfXBCxSpsc3FoSSVYCrNk5jZmvkJpH5mWoTEdtwoLYNSi6CtMxsZ6THXc"
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
