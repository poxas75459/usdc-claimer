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
    "375gZkL6YPJ11QJkC5BDjxqG7ecFKqFvocms75vuku25XAHzCkCMJMa5hSFqwnXG3uwe8T9ai7kUjHQLUqkh9Zqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2An2ca8hZLRzo2r4aQU5m4viSi15JLmyra34b4VCqjFtKTQohUmcj2XYRodqWqDKFSpgzavoXkiRfw1PvdP7aF",
  "key1": "2XK9hyFn6iM38wGvsrGcjFjM3FQ3YBWp2ZayFrszq2kFXnZc2kG6hgBMmvS8ToM9ocTqn4XWVG9tfaQj5sn7ExUk",
  "key2": "4AEmecoa4mBhbvj2sat13kWVv1t3NRpnUV8YrTpKARpP29XFNB3SAmP7BXzeuo2nueyQdm6jhjUtoDWvnaqBKbTn",
  "key3": "4NqiJn7XsCvCETrPmQkCcrK2Z8HhFvfcXkX1EgzRbaSadtSSEvv3XYvwTunZLUGHZmDb8NTiLR5N7Bdiatuv43g5",
  "key4": "aDutPqzRgU3KHrGaQZU2XQFnaN1WeAHtYntggbpDxidrQU56PqgTh5AgK2ZdyAU5awgPYo9HX1ckt1qX1wtHLCP",
  "key5": "2twjxk2FWxDhpjqUEVGaXij8ecP89wU8LfXwb5UN8FfkSpwP7fzHa6BHJ9NBza8knmDAGTZMEycHTM4DZhCKsMhh",
  "key6": "5MJ9EBLoGzQpfGCr5LeUH6rqHozdzauJw5jLCfr7G2fuT5TdETeGzc2CYLFq1UwbdDx2ccPHx57WGCpkCQZS4PVe",
  "key7": "4F1YzPvx43LVAqRUinVnoVjcibciB6dkKufo31kqaAMGsSthf3wk6xFgAHuprN3F7Ri3TP3rxTnuTmLxd3avg6G",
  "key8": "FA2KLteggXSZkEHUCk2Vsu2YJoVzxJ4KRMtHYvscSPCA53vCio3GQ2XDn7EGxBXMWqva2oXwHMZNDgZ3etcBZjy",
  "key9": "4go1qmjd3yUAnwpyq2abt2Wu3978v65fmrpGbuTPkyR53sTQYqpXyqATHorog5Pscz8KbsM9VjAyu81WayNnRmzU",
  "key10": "33hFSKMRYL8U2Hgavabwc4aCjvq5g2jv9DimgbWxom3AXqCMjuLFv1BZa42A9NHb6NGS5G4sJLu7yysU2JHPE7Fh",
  "key11": "4gvKgUzzQvHnWy2qwuouRNL2YeLegV5vDiiZpbbVi9NqGbjXBohGhUPr5WNdjVsWP5N8SQJdFmFQzMjfQx246ivr",
  "key12": "5nrA8Rrnkp59fnkt43gYgQ1jKaPCbgmuxZdKgLFipXn6PsR6z4y3wXifdQKqb1XwDEmL7SQ57Ls3HdeSYqfnjmaN",
  "key13": "5Hey6doKJp5WZYqhP5e4vAXaVxbFPwvnEwBg9XJuhojs8k1zcE71Vp9HQF5j5xkHxq4wBaZFS7MLXV72Ea4gPGvz",
  "key14": "3eV8Vo3tC8e32btACqxVgkSnFvapr6atUmPd4jAiUESy7h17axCMhyxC6Dm7oZ18CPFGVXTXfM4CDsHWRJhQufL5",
  "key15": "5J4BinkK7WRbhuxdBwDUxZZcT9xNfFPxxyze6yNwBA7jEMSQUBurWe3pKXDyK6SVU9qikKKYT46tJcs8xP74GKdb",
  "key16": "42XC2AcVU25tbd33Gb3xLKjRbvCHCZx11JYJTzb1jPqjuXWrr24czMoeZd2AiseNL6oyBuf6yJRahX8FPMKB2vFK",
  "key17": "5oN92bRGNsFziX7KkDyWLtnviNSPVXgydGCvDvLsTEc4W8EzqopgQ5Hqu9drq1oq9ur4ME7sin14E3BEzYpbQuqh",
  "key18": "5tyRcsWC6PdDq7Znaz5cXHVjmbFy6NVGg4Mk8NP1N7PnRdzZBfMUboLhtELfzod5Beeg5R2vorNFY5RjJLcqeoeT",
  "key19": "2vjuruEdUKoZNLrcU59aFdgzyu28NMmuw511r5vGSTtnBkYzhLN97pSuFmXK4ySwUyuNMtj46cE1y3PcRDNsHcd2",
  "key20": "43m5sRcjinfi2jaENfYVHYnLb54Sq2m5no2Wmbyy8E9vNm8VF3PBRiUUYkSyPWi4pbytE4jkpuE8HpooYssHp5D6",
  "key21": "4EVJXMVFHtTGxx5KjUn5b3N6FxzrGJSdMWvuqZMYX5K13Xhmp6PaaTfK2EtFQNmzZeVitWj1FAtsSVh499JQkomj",
  "key22": "4U8ZjVFD4XrQeVivxRkTPYxGWRbnpEyAMSbBh2oDxjtZ4xR8i7ByDc66ZFFLf2giaBj614n6MaSwkBph1dRHEY2K",
  "key23": "EpjDT989uT4Ht5vh7RHpqRsPzwrxpK4KLF2XtxjyKTreuYd4349NPHhQyMia6xff5fSoqccrqruGAPWAPnEsmwC",
  "key24": "5bxpSF3jK3UnthgbiHLoNVPQHWZ6R4MCA2jEpUhyYqiFs52bG2WyoCLG7Vf1Csn132Ein19csekNbtcMbEhJ9onV",
  "key25": "sjYNTYRq8A4tFRdAgcbC5Z47mdScmt8HvoQJ1PrK46y4NAvk5UuVt4xb7xLeYUiFUETzKR27s8UVSKbnt6RFHpv",
  "key26": "2VzPc6wz2wrVmuizAviY3gVrtQqHZU2PwtnWMKK9379sdpk6Qmzw9RsSNMtJqz7hgAGLHkPEYYCpgqBLMBdTA6qW",
  "key27": "5jb5NMPfCfi8qrps97oqQb2Uz3w6QX76RguFu4KwobpCVyRxggMvuhgZaaE79Hn4kCGDueZaiNaycPzNbnLq3ocd",
  "key28": "51fadLcnf4G2gbsQpn13RBXYgCF8HfGGPXbq5zoMGArmyy3CnnL1p3STe1SJhANw7GasH7g5F23b3MBmax3fWC8Y",
  "key29": "52ZhbgSFRV9zd3hWnRXQR4h6UV3RHSdcSd6EYsVwyc3He84A72b1fCG8i1BofNdUFxB6q9ND2qmh6WiWiza6QPYi",
  "key30": "Vyxig8XudP1PmwQU1guwShMmoLNdvyagSnJGgJCPmAv9HHCKsSUxFR8NqiwqYz4kfU3NEEczGD8RJebZJg2Vo31",
  "key31": "4BCXbmNDhemcaxLhXTUFwcqeTP59FNMnrLdZMRWzTv8iFSMEjoHp5Q4q1oJ3XEZdVirHPww2Ue92K13TbpxraMS7",
  "key32": "ov2kC39LogP8BrLifSigKjpMWPxVb9tMcMo3rbeYPwfq3zzr9Na2YQSzAbtDEnwUQEQtAy2BK4poSeyo71TXRuJ",
  "key33": "64HpYabq38aVY3bevTCWHPYWaAKfAZ489ELdgKJpfqHP8hrPbkNBAmpGme86yPx8UccAES9NfRFzFkzG2K6cEhYW",
  "key34": "4YRBqpYmYtwBk1ZJccriQ1FfYkiRFa9P1fXTsscohLz25MGxXwVVWQqtDh49LYTCCq3kp5DZTCUByXMff9xV51yp",
  "key35": "2MQGFENCMojrzqNues92jY7Lar7dzaw8BkebiW8pjU1EeGSyrRrq6gm31HXvVTvsNtV439uGLupAMcd1xiz7x1sf",
  "key36": "5WQoHKtnaPaXZfnfMRkJg6AQzSzzwNB7JXUA8Q5n6TzSexNvwzG4c2pJ6tkeX6jLJsxx4mNn23utY7nXqVejT3Tw",
  "key37": "3BrFSkiuH6vVsDsbAb6FwFfqjhEK2Vq5PHmzP7QiCzrE4bqP1iZttprpmxTMGmNUqwriUDuBRYwW1RDXN25utHBt",
  "key38": "3nmFoReTUWppmLZD1V4sTdJRYU5NQgDwDmV6pQzVFon3EQBPcjspiwgp5U1AXjGa9ZyxLA1aw5wvxEPo9n6JZc8i",
  "key39": "Y7Zz6deeHsD1ULzH7Uuvqa6aqWTN385tfjU4Kpkt2oGmL5Lpdtg344Tp7AHCFJB6y6LFBqNWThPedRja9kRX8tV",
  "key40": "4mEkCiZ27EZdRzEmy9ZXpeT9vfaP62dTPrFDpwszgg4sE23EjvdbGa7WccgG4wiV7MaV8gz17RuH1DqTEmBV5C52",
  "key41": "2bLdpqi1bWHKd28apgdw9t8Jay4hj4F74WJtR17QJN3ByMEWsAqeYqoMYHA1Mg4ivEa6C3ZUeep3zhykrgKQ8TzD",
  "key42": "5daWEhs8cWxLntXua8JCYiDH2TtrsURfgDPqLybhgv52GvoccwZMJze1MkPwgGN98pofGpTKvb95TrUAHpDohS43"
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
