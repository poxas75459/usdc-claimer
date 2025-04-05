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
    "5XE9gJkMtha3JrSxejjPrPEANey2P1iwDa4f3SPjYtfS4zQvUPvum8WPrUdqxhrFQ4BxSw7AVeoUxekXCabkwnwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FfsuhXfGgq6iD36csWzUJ12Go221ZGq6JaibckrDykd1qauNEmYjdakgLEfbXtTnQT9zQjFfeVFqZbVwJnyhaMX",
  "key1": "26Nr6cGg6v6NhDAAsggJTPAqNp4b4Kqb6ZmMVK2PRM1McXdPf4ZGk3RPPi6HwFc83LTNPWQ8efnsmSFwGK1BbpRc",
  "key2": "35hYLbLf8Rucf5zwXzJz9CpQzdc5VFThwUSDR8XH5XwV58CG3W45efadyXk8EnAozwdyp5ffLA7e4D89kiTcerNZ",
  "key3": "2sTTbGo6vEwRQWiVxbdw677ZaPXNq3SJf6hUbujx7MZDFLmSK1R1kvhkbxGaRC78r5WcZ1GJJqkFkrysSxxUB1cq",
  "key4": "XgKY2MHauWE9EmgMfTiKprwedj6NTcNcJiwFL5gXp7M91JN6jxWgVRjPiMz4YURkRAG3Qm21C1GerUVEDaWbL56",
  "key5": "2Lwh7L4huN9wyo6ZrJwme3akPqUzsNk5NDFL7t9S8BBxwktmeF32foQXhftUhrjgHwdKEjktsbJ1ioJEi4CwAe9i",
  "key6": "31pZqMhbPoq7MsGUM4hwYSJ8DEGH55c65KM8H5wegJ2c7Qmf2J9MRjkeFGCYXpVHnFQwMCGBzkBmHcgt7PD2NCKf",
  "key7": "sd8ejL5VeyG4sdxGQpdJw865cYJ5HHH4twNGPzkw9t5fBf29SbBY8fGQmi1i7D4KiSsV8yBxmH9v1BH21UeVGK8",
  "key8": "KrLfAinp5r2419ByG3wHZhyccNBrJbc3NYrKwhRBKd48Xcdva6vtAzmuK75CoDqJ7FX3xMgsVFqJLBwwdVL9cWo",
  "key9": "HNP2XyyGtp81nR4sg42dtEZ9bHL1WJVv12MmGcT1FAmVdz2hzfWcTGmbsaKz5mTfT6UQhvx7ULGZ4xiGcS2srPf",
  "key10": "8BJ1H1WHP3EcoAdd2E57qL4Tw6Q47E5jSFAqAuUdTiFvheBCPrUVpZKHUoyMBrKLkgb8TPeziHjkk8urf75G4aw",
  "key11": "4tkyHDU3Kpk5RSe4gS5RBkDpGLKXsHUQykoA92UuDcuXMWCPHFsxEtXqeKfGymdir7fnNNqVMX79mfCmUF1FDNU1",
  "key12": "2AQdmyUUCxyeq7hkkPkP7j7ZZxjCddSH5NTXQ4z6MsaPixX5c974JVEVjgYu4gwxDKfJW3xh19RzP8ARUu4wroDY",
  "key13": "DTE8t9MCN9E7CMS6gHdcEjAkNQ4nKxrBfdQFHXDNH69WVcPdAik67b9BSmHcmHNMvMHTnRBx4wGY8pAezHGXpDw",
  "key14": "5DaHPbWNrWMs5ctQau5HNnUiNpdqTCAhXampudDpNX9Nh1bFDhD6iVJh2suHeJNcmsfrz3QU8a3ZJfYmpLKP6Npu",
  "key15": "39gUd9FFmFcf5eDtxbzWGHRaT9XA6fN8mxUZWuWUFELgKhzzcCnQDZu7jXLxeR75sHWAM2kcAdskuwPv7pCj2xhM",
  "key16": "5N1H9oFkvR1tQYdJCC9YjmyKW1SxkdAu921XYjLxCE7jMsH9edzEu37XGhd9WG6PqAEcF9rTYHX6mLtj9JtKmmfP",
  "key17": "2RH3RNJXxwRa9jeWAP7KsmsFdCyCZbMPW2ZZvdp13vRFrooHtovs4gmrTEMsbeNJ33H7gvM8XfK842FdtcYZy8cw",
  "key18": "5hMjTGwYBKuPaDNLsANkRvw7j5XMJauKhnjHPg876xPx54u1UDzaYqthwM7ogMB2dwcFGrvXjNWc65Ury9nAVgyT",
  "key19": "5WZVfP8uFQEdMEq5PKPgwn1AJxZuXDKs427Pd3pqsnXfiZFGoUfhgDfNi9xswAHudqk9fhQayDcdSKf8c1E3Lo9s",
  "key20": "5avbuq6kLztgG5xpjCSnLrjDHcSRF3Q1SRhgrzEwb7fjHHgyLMz5Tm6xS4paWtax9guQ81riuaF8psjML995gPUT",
  "key21": "4LFBNdsrGJRSDTtPXSWRg2xy3TJvQbBVXoRbFUv9g8mfK5oMb6GWpBWzVoFCLv2dq6EvTs8SXs12YQeSXaoNAXVm",
  "key22": "2m3mBaeWhTz7v6yq1AM4Csyxe1grZBsQ7mQwgsSqEHkJDZfvbT6khkpVnC1VXqtRD6VYQo45oT9DgaLe1i8V7rHf",
  "key23": "3XpCgN45PXpuwKqxJE7SFmdNK2sHhGgytWcnxsEWyKn45SU2VV7AMFBTxA9iNqNJr76AURRrAoyzkcm5xqh2hJL1",
  "key24": "12ppVUYB4pGuJziixN6uF2AzaN9D9Spq6kdBenXQ4deHWBJLnUbDmEmxorBoAPrdnrVJeZiJdunod6qMoh3uHVx",
  "key25": "31NhTATmfCNYk7eKjtKqXnY65M4NJxKv7aWLFF3iyipThMn2JN4dwD7yqj1W5PH4wPM4eqvcq22fEV16R7YirGCQ",
  "key26": "xmu3EbAndthhDdA24D3H2pdVu3VHK5U9sGdwg312qCzeaK9WsodPrxBmyHLRr8MDJ65KpA7cZC55L9wEMpq76Uk",
  "key27": "23MQDeZGzqmG6x4XVi6UoxhukBywTYCwsD7zciCCwVsgtA4Dj9GAgedMGwKoUJbw7LfDnAiUsWnmJHh61cUfVWHS",
  "key28": "PyeqvbUaYL1qEF4f41xsEsxJgN9fquDtmF5EuGQuTunjhAhprtcVJrgfKt4yFv3pS1Z2DvoZMzVsH9RFZRmVcYP",
  "key29": "4eF6f3gmRyhZ3H6ehkUQxUBG6HbKbyjWEEj5bfkjakBNixFwuYA41GBxNdMLNQXpdHWqdQ7SizQcXbtrbPZqHqUt",
  "key30": "2tfBdoirLA2usLr8CQzKiinPBAEUxkZ94vjAXAKuYPGoVG4LwKMzoEH63L9p6n76CsS2hGS77qMSrJFgBCo5vjTm",
  "key31": "UfnghAyS56LtNTrGZHr7mM6VC5E9v5wmrJACEtL37pE1Rx6Z624XoQhWXr1YNXmo222JuiqKwTHWzb1mQJjXJie",
  "key32": "1XoYBQ2UPofquY721rdtu1YbvK3fhYrpWdWPFfZ5U8KhEZfTQLiC8NL1NHAttSUebexTz6QyE7cLeDmV9aLGqJX",
  "key33": "r1VPYpKZLPCcf9h13TAFmgjXBMJKLBpoRYUzfhbD7Wr391P6t3ekzj8Q8zH7yoRjPZ54stf3T9SpcDBhCicYzYz",
  "key34": "5oCgwAFsgBENJ4wtcku7TQwtRtPPnSCbt26imM4gNUUQPNPJGQG6pFefXHpy77zcqgLg9A5PkEAHQ36FpMS3LGoU",
  "key35": "4sB3oMEH7Jmwu8axe4CF9nEdoUs45vvjKPkoEcf6sqGjfNrrNy39Gf4N7SLc7y7AjugS1Apy74MmW8CYLicA8m76",
  "key36": "43QvXYBjHSxUM5WrE9FSPhqvuCpB6xRWPRuqzHPeHSau1YyBMBCKSiezJgAfx76JNp2RrzossCmLtkGyrqxynTFG",
  "key37": "3N6RKBnDN7H7cBzSYE7vzVrseR7mUCKgD9SEofiTi9gNyYPLizBswzD8uWz6fH5sURyWdDnrSCXV6SR4L5SicVzm",
  "key38": "TbQb2oUnpWLJ1L1hDvhv5d1sHqkgGmKeyLEdwirGHF9chpa7cvQJ6JhQy8hVUgKbThv2NHWNkuwnXUw5WdFs554",
  "key39": "K5zN2yKqcQo7CNis67sBQP5VLVijuG5Ydrys6vfdaiX2Lr3b7VtXgXKXptZgE3jvfLfgAVB4G5h4Pgiu7zAXd19",
  "key40": "4mHq83ydZv8E6fveXBg9pcN1XKQSuuifT27EJxpFnU942DjeM7o27SHK7V8KSCm4A6RHAowLpYtEq1YWTVHyxPjr",
  "key41": "48qEWdKf6ezqT6cempzbfKYqfAruVy3JQu1BkoYsHY9pE5QAPh8qrGaB9jbC2FAXSYJzmmjxH8VhQPKhgQdK41nz",
  "key42": "5iNW45h1unPJqYViP1G8aAJtFdEMT3xbJMYJFqR3y7AfbF4yCSqyQpGnjRBaqm2mAJRRgFoNcAogSfPk7VJo7vam"
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
