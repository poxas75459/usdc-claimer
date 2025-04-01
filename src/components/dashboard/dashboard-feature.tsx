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
    "31fGH4usiq7jtp1PudZnbrx3R4EikzFhSadvQ8s4TCabBb6MhmS7A8HtsGfok4PeRdGSusDNGNifdvrTQKs6FLhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pEZ5TDLSUD8ZDTy9qWgyLsu2QniQM16dLa8rd4fZ18TBk1UsXGF3CSyyK2AvuQSsp5ZtyAehSxibSr1yj49ST9",
  "key1": "L4MdqZV6mozHqPQm5T5VDJiqgKoKKbQdQWTRqDVMoPQXeiJRFWZaY2FnBwQ3ps9ZJVcTeihE7EyUSygLPQmynyJ",
  "key2": "5vLt5gwXWnWEg2PM1rAp6tAbujbDovARmrw1FbciZsLQyA1gjaPuJaCXrfh625rag3uAzhWwg5NmQjvhsaFFhk2x",
  "key3": "4W5Cw79LzREjPWyZtFrzivcHzV7EJjk1n7cjFsuHVL5AppHYhQAFnSbgEFHdGcfcw42jaxAW6UiungN51cdnZMe4",
  "key4": "5TqtmLRnpWBbWEvPu9VEBtwGGUpKtWYUCQyqFnf6AGFszF1JFvGZTeqEe9JtWAtY3aEj6RHvCTVVfX47kjGeQj3K",
  "key5": "KYSR4D5KvjsCvxKsuswVS3f9MWnE2oj6sPuuTmCrsyzEBmaW5a2xtodxHDJXJLGvtTT3hBP3WzHgbvbZN2oupvq",
  "key6": "2dJ9YARXkEUu3Nn9xXPEq5LkGRjmpipRwufBgZAoHAbArqYu7D76gCUKFiLoxYv24qXEhcgJNenN3qGyyPChxCQk",
  "key7": "hqFqCczXjBNDkcHWHxPcsL737Qkd8hwsKGVYtQe8JmKcwhWkRCdqT2hy12tqkoJ9CozqXNyAF2mSnKS8i8Uqrey",
  "key8": "4gxH2Ygmg2Fapu4ey5rgrs7JNeSqsFv4GYwnwN8p4CN22gvYtM2Yp4EtGauugPSSgf3WN3Mg16vYjP9MvQYLBYQ2",
  "key9": "4jsFLZxyWkpQUDCpusd2zV6guPipGqo52mrWiLUTj9ozni5QNqFm6k7NVeKzNRkZcQXYFLtpEkyQpgfxjmPAXsgT",
  "key10": "3hkMWTqV8YhdvPLU44EyNAcGsw3uFDbQDe9gzwAZVo3iLYSShorCfEzWhmk9HptcDGD8ADukvpXDZ98gnLB4EfDZ",
  "key11": "5pxYkCaDzfUfArES9vZ5ZdtoSqimbQDgieYr21ani3Tn3HRoYbkWnWMnVgdMPjzXYf2UmDtb2zjy8tQ736ZJhYNK",
  "key12": "ehG5gNNqHDFLYhTEPf1SRyKMQqjjddK2fzFfuZodcxPCrZxygCeLr7HCxCsWLdFktHCMoCHe78mKE7f8q6AXosf",
  "key13": "553XaDuNqRffcbkzFUwQJGTbMkBK1niZnitX7hKJ2oA1YKXRBfa1XxhsTskHhcDViPcqZa6ADja81MLF6p75e8Aw",
  "key14": "2jXM8Ruaj26cZ3GNReni5NR3VJLM1rv9qKZZ7NaHBDNGy5wK1hjjExhYwfi6ZkyVVDHejZES8cLEBuNt9GQL7KR4",
  "key15": "3fjn3H6VhVA3JVUtVt6sBNFKbyP6xmtgnYncc9q7FtiTdYryP3Fmp1sPrMDWeFwAa66WoTHqjN6zj4F6dhaHpF5P",
  "key16": "6mNVvDEW7SmACKRxiQnM4ePX9nuDgBbZSMX6FxemqXchx2Svtx5VTvWMjCtHYg4uBQ5TiV4iESFCz8cU4NEo7hL",
  "key17": "4v8tdSTEj1StjDSArUMyF6hnbsabBEYn5Qwd8URJVK2vvNbcUQvCYEXcdNDoRQ5dBZtsEzi8UVyD3WmfTAkC3SKD",
  "key18": "49MH9uXbDXbmCSJNXAU7Cy38xYL61NY1aLKshGTmzo5dcbSREvt7ypgYUwBX5K6Mm23VDyBJx3YTXnCNcxPAXLi3",
  "key19": "TZu4KBFVnsDW1SyxaeRPShAU1YP2K1y3T9Cky2imFN7qYWbHVbRuJuMnnYvQXcnBPH597wL2RjHdTuyy2rBhtWZ",
  "key20": "yEPskT9wGVdpm8LXncnEnvRqh7WzkZJeVHMu8mhJxTtfQZZAPv8dNvD8SyRQdpKsEZRwqFrjUWVnVV4kgYnmDfL",
  "key21": "3dePmXziM6ZaKQEZXC4WQDpr1RP77VX4tnRsT9ffQaLjQqqUXcdwdQrdFink2gnMvMe9YKk2sidQiXToiLwweqZE",
  "key22": "VhodxnfZXVP8mZBrEsnHnLhhZnmY9jh56UCbfTaeYAjgQ1oLgpNZ41xBbiVMUVnXPL4Z9mAEwvGAEmttRxUY9oA",
  "key23": "5uFoZ8LdgUVNM7EC1ZBm3sDWRiR4KQfD47FMEPWsKNy6Q5hWCnYUQNGP3fmhpCz9nkjrciphPwp8orvjNYhKuP9P",
  "key24": "3xHWTqCu41zCU2U27rdEHg7rFKrVcy669M7NMGQePjA2tgwoLWJ2QAqSQTcMW2PLwgBVQ4fRhF8C2bKd1mdFcZHL",
  "key25": "35ZjRgZcTVK7vQr8KgH3dhqR1nDPmKYXStSDxzDj1EQ8MmYn7vETmU2rGJ2aDxKJ33dQxkxnA1xnSSnAYh8znZgs",
  "key26": "4kw4HEDmWPXSBS74oNDRm7eeJs7ffmd6UJR7fGoQ9fiwYMuUjjZ1HnA6DgcuWgPR4VFiGuskip2CBmjE28JcVstT",
  "key27": "3PkooWijR8wvy5Ri8pZzTsiAsx5KGGTHQFgZ38DCcHN3FrG7X1xbbPeN2PpG9M1SuAx1JxSRZbdh4DTPGtpQyJuA",
  "key28": "2zQk5PvuFutdDWFrjRhk3eojuY5Xj1f5zxipBLj4Bhff8cSFkTgfGfnircgEZnv2vuR8WyPA3453JinjbToaSKDL",
  "key29": "2LoVi5r712qkUvKPXnE4LtSxbpe1FwkppxQwRg9NKhs2NFAN7APsuKZ7amEPveVH1r3wq3FMgoq6u44LSGHRGEBF",
  "key30": "3VtQ5GbEatW6ecoN9EreJEVF59bAYLLbz8mKafhwVptKs3iNkP9Q1wkbMc3SJEmYN2z6Tqhd6K1n5LZDSEEppB3Y",
  "key31": "2zAMaTDdxaQUBn8sW3SwKiFXnST4EG7a3bJXTunYNWtX3K8Y916bUWgCDMuE39bnzozVV3fhw6vChdyvTjfeUW4k",
  "key32": "3DxVoZYoPhRDa9sn8cjvQchm3Ev5yaitkNTpxHpqvgYRRREsVtPobKqS5BubDmPSrhiLqRNPAZZEz64GaxhTD3Q",
  "key33": "5HbMQxFcREcMf7jRC3JNae5guHsWaXa6bvwjFXbrKJyg4UoqZX4YkQ8soXDHn9LXwExfuQg5zhT1WAXHWbyexL91",
  "key34": "3tFkS19oNQum7xAzrpeiW5KcwSQKPhJhorMJojUuBr5qrLkkZQRFh6hrqynKBym1EgFYNEvB97cokLn2gaAjgknC",
  "key35": "SSDFqUzfL1DvPEHPxA1pqZT89S7RBvJst5eDPNr2FqiT14shEvgpLXuKqpjG3t2bTNckXRrpcG2MdqwyxA5C2Pi",
  "key36": "2MM3tYM8MYZh27fRSyKyyE1wQAcdurgc24xkfkmhzWyYqeDnfSezHQCykLJtmStDSdTYqdsU8xh5awAN2ZBKvrMw",
  "key37": "27kc391sZsKRbQ312AXG6sx41guHeLPgTmm1uQndanUeiKYQcbw7PoufjKtCxdZBAumM1EMd8cyGMMQDRo24y2St",
  "key38": "517RrY1EZFAVjp2Fd1342obB51TdrBYqKYbLVigk1azGMpxAxFZa7TRWcj1De5K4KHT1vG45UTJEAWkQSwVHKbFH",
  "key39": "482msHH85ZYwhqKRoLctrjjtbANiohkqeCys5gosAuqnkHfxB4h1SVztxqHEHb5DnwuCprQ4c56rFrcw26oAgesN",
  "key40": "67H7Dp2UsQq5iFfKZXCUDoXdkqbwGBr4Myu6sWbXUdta7QFbUJVDCG7XAGqV9w9kk56fLKqUVcwnW5bHWUUJZD2",
  "key41": "56y6Fh9dF8mmK9kzkwDCh5gzk1S6UaHtjQPLfpquCrzB7gybXZx3xBPYnmJ9rUyqEvJF6gdtKWE1md34B9YBedJK",
  "key42": "NGjyQnxk7W6B1Lhn11Fg3N35ynTeFNiBkNhhNdWyoj4m6zdc97Hdt5KHXk5vYhRHTcMH8S4zDLWsRVoQve6Mige",
  "key43": "3K5VH5KgZhWGAMHVCsJ7PEPNYvgcjLkyQtGqLNSvPPSt3VXmprLbpc56JpbQFd4iRHRDjKUYMB2TBq9V6AimQWgN",
  "key44": "RN8Nh8zzcPfh3BT1metQUmRt1oQZ5AiZVuxmWLVqJFFt8nP98WwwD9cPaEAB3Vffj1nPD8iQuzQjiGCu9U7dqQc",
  "key45": "67oXPUrdQFRvpxajA8tz6Nt1yetMK4ojgFW8B147xwJ8fZF861xqMSgcX82dpVzQyvmCPRvrvYWnmhbeasMppWL5",
  "key46": "3hfvSpP5t7rPc41G1RFZYmaNchGJJVi9NvHoevHh63xDqEzgQvaivrVR2UHN3R88gJyaqEsZm7Xn5GJAtcxpKpfX",
  "key47": "351KTKFbY2wRCLsAJ7ZxUyRcNYuidtxjf7SYGn65eUGHcKB8nB3e3msPnsE4F14HEGfFHdEMb7hygAY96B1As11s",
  "key48": "3eVRsnxn8y9ytWXLn3LT5TTP6grR6r8vcke2F9y1EjSACjSXjqwhMJ3YKg78fKrfdScEJh2KkFoQ3ogAWDJVsLNF",
  "key49": "5SQrrNigvkZnRRRUSTbgp6x1B5jE99Egqx1JBf4waYiwhgSjSL3zbgy55oJe5A7JrRDzJuA3uAQpsWDRhYUiZdU7"
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
