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
    "4iGeKtMJPWRMKoiNHRsd2jGLHXsFuEUc5ghVZEY7iQ3XNiMgrpHt6RDtHXik1kwDeaCaicR5DcPrJEk5T8Fp3No8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErmetRfL3C9mWvHtaPyn1dwiYctdULyS2pFZQDX1Q4pUYoQHARku7yvqcyQnPArqm64Nt41aCD49Ns39JQ8csA6",
  "key1": "2BwZw7JwJqHmYHmG5ajqeuhZBt2EBd5wxnfpywZw8XNTu9uBUvqcBRzWQkQ2r6SVAqScGoo1RYYekkvKfGd3NFNF",
  "key2": "2vrvAGvqcFSWHkAsdK1EwDsMyBKTpYY8JCmsyvyh4uLhTt5ydFx9BBMKUjES6deZTjnJkcqoUjHvixva4fYK2idN",
  "key3": "3i3YsgpZTiuNLMFCKhuDGuVGGdfTkCwSrVWo8618LVh6k2KdDrHj6P373PHNKvfmpYBerFzDThH2HpC3EVEzg2aL",
  "key4": "4U21X5PwvBNVaHK1sJ89eWjyC4pMtNRc9Jc2ju4tinjQiefCKtPnLaa2S6wCqtDH8pw5P96XkQABhXwvRScTBL4b",
  "key5": "2cMK7zZqgonj1vtGA8GGbnkwtpd23UdtzGqNKuT5mv14gXc8zNw5nocXnf4m5teLPNkBo3J11JPCFqYyfSbkZkwZ",
  "key6": "2moi5Lg4HVECLXGQAmPDUdRmAcoeYHQstQCPqFp3EjaomE8fzCh9stwGdjBdu1y3FoYLxipicVz94RmauNf9dkea",
  "key7": "4zuZ85WPma8EEuR2ioafzpHwBUWAHuEMpoB6tL6UBxTV8R5Xziz6oB21jBV9KKs7jZXhsRVZMJZC7rmf6FqaRuRF",
  "key8": "2VXo2cpX7iswUx3MxNP3C67sEwn2D6xwnKEAcCP2EBnjjtXWykRe2FFmsGRGqg7dAxs8PxmkJBD3g6AzJUNTRuVu",
  "key9": "5MixSNg1idQxYSCy85ux5urED9F7eQ9YmkUTf4HcU2aCq14aPsvU7uVuNHspxCVFMD4VwsxTciB9BECj3vyu5Fhz",
  "key10": "4WEmRKEzFfdo2Be6ebfN4y8RfwEJNR7ZRGjSA7zf19PCGoijoqBbc8R59DXgefzHurwLF4SCr5wU41xDT2PqcLbE",
  "key11": "2kSoXz33wnjtXFmUsK6BQxCFff6nDGUDPb1LhzDLf9dXv7BKWEECZcfXFFsQ72hQBKLWsMj9QBGZx9kLK1uFjsbd",
  "key12": "5kkt5if9tsRZ6coHpzUGs97RDGb1bdo78LVHTo2PPJ2EDHdf8Hku7tEka7F21KX4aQVj9pTJdBN1qodL8EkrmAaG",
  "key13": "4EjhnJ74ucQ8WXJuU1bd4AcMuT75Hbcd7f3nDHW6ptoWgdLowohQnSX8CmcNFELrBuzondBFDDiobxCUZK9uP52q",
  "key14": "F4aCGxAF35axzGiX3WKSDvg3hCTdg8yZfdLcJH5Dd4tWDZg7rTqbHqNiGiuu9AEX1Pm362WNEdpoDg4PjLJviYx",
  "key15": "5NkSBarTPCScnGJ75J68FFfz6aqScpCScjFqFSEb6byzxMDNizrdBWHfonBjugj9e9w4v5SiJZVgS5uhMZJLZkE2",
  "key16": "5SkUYKdf9AnFjMfNHUK6KPXSDJj6nTvAfx4Gi4fJMLe1vmSxAp33mjgdr5Q88vg3xRd7tECdXSsfXTHzrz6eRnde",
  "key17": "2UhrjHrY55yioseGxiKbJK96saY5mPiqtN5jgrK4yvk2xG7XCPwpnAcqfja52LXpUMf8MexCDXbpb949sHPLyJhh",
  "key18": "2TWSEKwQqcS6hK53eecHWPyneFnLhnnJrXFwN52wzn68ARzSPEmtuPyNtgr5kbAM3mURW7nM4DsMDqwAHRsR3yG3",
  "key19": "3C5qVaiLK9EHGgQom3VTP67uRhNbLmGiVixDxFiWGuv4taEdXXP3Pc5otULG2bRWzmANBqFyVfoM2b3sN63ATRgi",
  "key20": "4tFRUwaC16ruz2ra8B1bVa64HEEnpLLUSvZeNtqUnNN1oUBFLxEJrHjwS8jenJQKZp9Hy7cZQoqWUgsHhV5Jqc26",
  "key21": "Ldg7xrrVoCdTx5mqqyxoAiCwvQc88tbHMtVTYWurCtaUKizkMoKaDy2wVYRRbypWkSaswkEMZ98vUvxPDnj5pC4",
  "key22": "4mH4KUpAPcG87NZkDdiSWAEWfuMccWqaP8hvLi1qvPEhPKPAa7PaobcAfu5hfF2H7NPQJJZD6rB3N5HjuwTJokMZ",
  "key23": "48gWz8MnopYmHscdzCBQpzXmjUXkzndy9dEy8XiF81nR4og2VNKm3HMfJyfQxsYU7A8TAuCABEMXm5Jaz4sKnAjc",
  "key24": "2qX4qGLaFyjZP6KGsAeStbZ3RTFhAy9ASmXRg7zUQQdcKEBYWqA45KYrWPVADzJHBbGmmLMvqxmGEDVSifYmRr3t",
  "key25": "5aWowVmZcLA4nd26vNjrxTGZbyLwfRM8wJNQHXfB36jzNPPAfqwcycaVxWSkJKZPcML9MgFf9j49xUUEP6zAQ34M",
  "key26": "2TJULyCmbP449tYRs4mi42bu8yNvRjkiYJ97dPN1onucAM16s7oZxJwGQXQW9XkuZYeJVhFx8TnFaYh5tsLe2qrC",
  "key27": "VYoVSVZHWJbrxrxuouarntYgKV4fLUXUSo7irQkVYUrVz8hXoewQBsAF7KEiC2QSRe1JPrsH2WcXsTT7nq17dvd",
  "key28": "4zvwc2sxSPFWBfTJLFg7D8EyTgfB3B31AEw5HapDAffeYbZdJZLjPRzSNd7rjftc2pHrxox2TGjk1tE1FqEKgVqu",
  "key29": "2MDkuo8BEKCHQ8YhpdwEhx5d2wDMMry6BQCZMRaAcVPBT97s88swif3fgDHuvj8tCUx5YDA4KJXS4MNoMNKmPGnW",
  "key30": "5p9DFfKQ8pmp3TDNsg6dbeLu5Pp74CHLrvKF2qmttNq5tuyVmAVdUD27VRUSWtKUqbztQbvSoUE4QtuRtLu6ECzH",
  "key31": "31fxiAk4ZSz5jofE8CJ2EGzn63c5DSAETXmKpXHXS4xDTCUg52JmtY7rFrtgpMvQNuK8BqfvtM9hEN9kWAj83s7T",
  "key32": "41BakwqV2j9FpQQ92oqCybc37renLd25PVUVqPjL3CTRks3M87p4QoBogbMhidTNefstxeH4kW2LoaPoJ7TGooiT"
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
