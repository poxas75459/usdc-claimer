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
    "5Wdb2Aw4ywyJDMvLt2engq9xkvTuNAKiCdRqMLrL5zq1utDndTCNgTgdKz4XbgFyAnLw4GUuYVtfyCcNmPEPdHrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkuk1RQPEiSs9XBmWvGwBXgXiqrh6hEU9JPniRb96CKWhbMqxr1zzVZ4kVV4aFY4VPJfNmyHcBiMmFFtEteUhJR",
  "key1": "LjoDr33aYjc4qhjApy1HekYKcaAAxZpGjwScxNE2HdPAkMJed34tSLUd7xVu9WB5VyH3HGb3U77qwsp32bqiRWN",
  "key2": "63z9mAA6tV2GZWPDzERA2h9qGYV39RioFznYMj2Sca1Z83LHRkK7gbWKjwkkAgEAWyNStfv67CGvyn7dUKCLsRxR",
  "key3": "NrrizAeudAvMvP9qyDsnM7QhEGsPfEB6xQKa6affy63EGz9JoJZ8ft4Hg17e1NfyiQ3TWeX86rdvZCr3Xm8Rnpq",
  "key4": "6RRJuw7jNFaWZ5mX5ET2HHRFEqJJEAiXNp6GBGf1fL91jNANEsLRRALfkc4FrEKjyx4DXkNvHrw9Yrn4eF4iqXc",
  "key5": "p6b82HKLUM8yCrV1NZikQWHfVuoxWiwrfzf2w8nfaum4TjCzfwwKKwYH3SFCPuSYomJEayCm5M5hC2aDdnWGBbJ",
  "key6": "37fipsVXCsVBD3Qz87WgSUWS4NPAW97XTqgravaTQHo1BzJuRcQnu6CED2tiE1aKLNcrHyL6AuKwcf8nDA19ASjE",
  "key7": "3xAYzcyfC5SKJPSANZdVP6556TQ1HpsrghycewHWnJNy1rydcZg4b5CHpWdcCQvR92oFRVfjh38HQsZuzUNsPRro",
  "key8": "3dCpW2nYmz9BGqGsWA61pz4X2P9px9R91AbGiortPspCqTicx91VuQvy1djbbDibYHbNJY2LBgdVBgebPyjYVB86",
  "key9": "5ad9paGoDYuWLygzLvMYogdC6TkuBqXAoFMg9WwaCqbdpFpAFdFZgs6Merxp1seLcmbCBr3TJSYX8QqUuSvVH12S",
  "key10": "4281k9B2L3yM97ExpJG7bEPM9hDfTsxLGKsxYfrZ4e7CMbYz4vv4amQux6jnd71VQDTbHzWo5UJb8rapQXeTHVnr",
  "key11": "bXT4nSzLk1uCVvG8uJAj9Px5uo5x7YhK3VeSL9DVbH5w1hSZbQTKp3TQEnbSfnoKJCjgfZr6v4g9YnDd7xkBXmH",
  "key12": "3tZ5zDTFxhLkRoFi2JAJcCeD9GEJEwnbtf93cXooVyhm4oX7iZzaKoFHCRpuuGv6RdbAr4Ct7UKJGKUQgxsSAXQK",
  "key13": "2eQQVXzS1jW9tuT4AdbGkmfxTGD4N1EGvPyyCdHy5eesiV2gBFnCm6su3BpPPMA8g1U7TdVsoLDSW4v6nwww5sc4",
  "key14": "2AnhR9jPZfS5vzWzMVWRGyM9d6GFF4897ZF2U23oKYNgup2HbR41MhB6c79hf2UAonWWWtNjmJ4GWwmxm2UUM3F9",
  "key15": "2x2MkkPkGCuNQmE9DZPC5hBgJqMXtzj5mWcKoVAFdRxAiMQbkJqxEvAFsn2q8Ebv9AHUtSVkTFqPcgrmymPWtqnH",
  "key16": "2mGh9KQdNxUR2RuzwcnPZAM87fWKxSYj4jLfmgc5gV57DXnEQWK7PSxBH76qAfoSzvWb5RhaTV4d1PYFeVS7JiGL",
  "key17": "3b9rzGxiXXaN1P79jFv6z5PSfrHn2tiPjSUQ7xANURPsKppVVs48Zbc7TpafHvYe7UPeXovXYdh9G92FXd4zWsy3",
  "key18": "ESL33npxZMVkFxsN9HDTNEpLAB43TUfdQzrRUpUtA6Vg27PetU3HJTm5BspVHPmy4G8zrzArQZRbXP5rABFKkNA",
  "key19": "3RtfcqYGLcHKD41AaNbgsdjZmp48LssZLrapD6gWgm5PyHz1rKz9CushM74xRUqPkhx3ieuJxqhjoTo2yz86K9hx",
  "key20": "5FTZQSRM97kMfTpUhnMLiQcVhKnLF6eZ6sUty3qhS1FuZ9s7CMurhQ2PzsMsvMcjYGxNf8CyWxx2VjTwr3z3VpR5",
  "key21": "2uWWer246PYKeMbiRyvcKeBvbkJt56fx6PYVy6g5L5YHSwVGXDS38LGc2UReYn6LNdJgGPu2CkgMxgxv2d6soRbM",
  "key22": "2pVtDhx8fpKYz2b35sQ9UavUyqfw8SH8NTEbecHNrKMV35q3oyyfhxkmPWfEv8UvwzsCAp4jRfd1kRJK3M6qEEtu",
  "key23": "qyueQTXJFzyqqeH3fF56cE6uvjFuc1U5cy8sGzP7g4ZZMGrjjVHsycvQodJE7qB15GxR72R4si53i7ARRKYiYk8",
  "key24": "3x5HdrBbBv1Lm5Kc7vhKs8aiivHbfY494KJRz9jwyxQPp6KbNXUnGwR2wDv1NnzZ1DRoJiAcmzws8s47n4cMX7HL",
  "key25": "bbiaeV4GgCd4NHaKa1LK5nY7KBufbzVx6kANkdd55hNa1oQXist62Toyn7aErxrhTFbWhkQDRUX9EpqYzjhAXts",
  "key26": "36qps191abHRgz95v85AbAJ7FVKpWWhSmqaMkcHNkPbeyWsv4Hcig9BYjVjGntWrw7oLJqaijpS1mbFF7d8V9xrR",
  "key27": "2YYc219LeqRyvTiDjwBPkx3QpqvYWq2q2NEJLxwCTera8EahYNPrW8wjWqLzj4pd2pXDPquMgUwCekz59CrZLAfQ",
  "key28": "4JB3tq8nTLop2HPLC7ddJuoSUMk4wCM92z4ksbrtbae28iHuadhJSJtfJC7oLaiQBwX74q9VCVyR7oXHWv6MZRah",
  "key29": "CY4ZQA5CYc4AX8SRQATyxusFizxyRXx2F6VNqnF4gUCAsBG8QqHER4fA4h835Va3QzrYEPvkzohJtDAX29SpuPY",
  "key30": "3BKoBqhCqAM1YK1a8gosNtptwdFB7auoPJav2KdjZUMC9Qm8rv6TAcdoaAEEzruCvxikp9H7V8ECLG73BWEBd6ow",
  "key31": "2TK7QLofBkTrWbrUpDYtabyhAkFjwzv4EZ21nGqZbKgoa9Ane4owjB5FG8YzEYthjBkiUgPHxNwWuxMphxgBqikP",
  "key32": "3T65hDf3EHS57S2n8vzTosB32jFo759Gta6AJ7tbTpVWYqtPvfiQ9ar8H3WBjizJaYUs4PapaEhHqhyrUhef8EH3"
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
