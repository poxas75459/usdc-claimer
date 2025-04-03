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
    "3S9dc25tc8GYzEcxVco3fLFwsX8iuuHLpZAVtbL4aH5HrTfgGR8sdhHxGcmCdJwHahQxvu6aozizGdqRmeDxvy6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LgcYfgCCuY52k7M8xe82kpv4U9gEU6QWGQE5tw1LAsFTecpDVq7aXE6QFK1NigV3LbvtykvUL8psruPkLxRUtvb",
  "key1": "4U6P4tidNNUAH1nGA4GEPBnYVb6p4swffe85WjpgMi7ZSMJhoWWGWBd5uzXu5MGccrCHD2Xx5yuyP1GfzAdneWe6",
  "key2": "2Wjwr9Z1nEirkyd8Lp7XJdx9VTcWaHbp2zS2V1C2CjGQ76fbEsHPufpxsfFqhL6kV3PkWknAB9tzRLGEQ1tQZyE9",
  "key3": "2Zr43HVvmDCSDuNaKC8k1X4UwvS5nwdud94NjpvmuwdKA7zVcuVqDqoVMAryGgvudgw2phxSsdfCy1ruMVfa8ZoX",
  "key4": "Aw2CXki9oyxDcNsEnbUr3kWtH7vNQWP8HCH4pHmt3hX7JQiaupwVx1V5mdtKRhbckhzUyeTNCaxP8Q8pWfQivJk",
  "key5": "4HcYTSn4pEiarv8PPCRuJNHbzbBhJFgTjfg1rwk243VQ7Ufmfs4UpKwkaHvMvokx9VkhaVYfdQXjWuypv3WoCxkd",
  "key6": "2NgzTdf3Yp34QxWYqnZF7yU5pKbC6UG7TEHoeUrAiCeK9xW3WJq2u9E1q6MCP9nvPdFPBaz61sYGzvBUf1n5Ajfi",
  "key7": "4XpWgS6LJ1jhtaX8yaV89C4y6PJke5rueZv12kXAsv4Ei7vA3BpSrWJHwENXBJDDmEWJAkcaZiXGfZKCT8dCTbor",
  "key8": "2czpBeNZnaxjEMd2bYSqUAnPGN6Hm6z1sPzarXiSVZG3vgXCKpi8z7J5EwgGUoXncWKkHeXtssWNGmHdwAEokWDp",
  "key9": "2mJiyiDytWtxZsiDa5zBrRWPX8Gk7KjeACsY8ai17mCPbmm9pwz9QAs7YJqfHLJyni4DgkTiHC2xLkraCsjwMyRr",
  "key10": "4VqoATzKUDQ8P8VM945JfzfSTghQA6BYjRpfyAW8Dd9eSLPQ3zfGzv86yJTk7gWyVpy1At3jLYb4vAdf3fPWoBp1",
  "key11": "GRcQRj3FvgZjAh4BXzzBPzczi8EPtUhC8v39gRKTi2WH88Lo5qodHgd5uFHBRcJUmK72w85XEujNM6qtFC2KdNH",
  "key12": "3WULeQF3VTJMSsEL7TR423HYUxiEfEmyruwCTr2iN8YaGzdgoJERxRwRmWYZVnRRGGoL7SaxWGPwsqtvemS9wRwJ",
  "key13": "2QokLP7ghz3hCnKbKFhYiUDw62tSiQPCSbjCdPwvpwVtWmPs8jq66qtRqoEGP8yQuzfZuboCrX7teHrQ6E1Z4Huq",
  "key14": "5q8wVDg6gbxMfrC21CMLfmt1wJQLPWWM4jfkUy2C2cQxcMGYsWE98tySreeuEwhoAumtXhm6mjuvfDkXfBpTVYoc",
  "key15": "2qbbujeetAEBFHXQVmfTuEXMGwRg11ZthN78kL3xhCWs1JJXA8fx8JoirQVATHbqaXne4VZmW48HRe6iYPnJsXVv",
  "key16": "4vEwq5sFctHwWh59HabrPei1hAZ13ayrvTdBcYMkfirpxA5GEu4bwLQqWfmNJ6TCUMTaoypwEqY6j7aAfMZiZR4h",
  "key17": "LX8i8StSDAdhLQcm4fvXNaS5N1R6TSxBwvKk6QHQwBpPNCWfbmrfsEzu3kHb8onhoApRJycWZc4uJtdrLk1r8Jt",
  "key18": "4Cv9dP3EKQFZZ6RyumMxFoFPFoMwy1BK7sFSM9k8vuksVqHwLs1r3cg553ZUAVho8TqPQhCR5tSgREKfi5vqLfN5",
  "key19": "3yHB1gy6akHL7ahsPtB7jseszrgcCGoMe5Hiouy9PCwwAcnnaRpAVdrUXHbyEGvnQ5rJ4EroWuF9HSJcGtMGYK3i",
  "key20": "5CHnqkLvdhsrJpyfyPa8p2D9w4x1W4ZX1tKsgQgDYbceaeH9N49jE49P2fWnbJtqqYmHr3crtA7qdygEi2Cm8WJZ",
  "key21": "5gkovXtDdF49ocD7DCiyNYie9xu8BMkha7XtUPk86iVXeXDQq5TKR72Nf6Mo5MdAGMFaoD4P81QQVezzxgGfsQkg",
  "key22": "4419k9Uqd5h9CDYSPp8mbVbyYbzBf5ZDEmuhrZFokA3zHHz2LHfVTPR9S2hVpKUbmvocR1CpAJT1SqmxXVYRnvRs",
  "key23": "323SbWSxmhWnjmW5d6FFX2PUXy7yNwPicMz5aTmq1junKwJUSxutvxzyCfaLtG7RwqNC75YkpwBnviu3iofDr9fv",
  "key24": "5YFqRJydoYFWqAtjj1i3Xxxmu4HWcCBjXZdXKdHVtqmzxndjttUVKZyY4azsa6em9L3nTVHKfArtMxeDKskjdPrf",
  "key25": "3zK6PkaECQyfKbRMSWPJ5XEAfBdfzeP9MUAqtMmt3Si9mVupz2vzWFmfArmWHHYqH6da7vDaXfesfXToVqRu6TBN",
  "key26": "4pwc8ifPHvECG5KtF3demvyQqAKpnLHgZLmPCxJtvitzEtLPy6RqVGs7c5Mk7EbtEhMFEhAVsqAk85Mb2EnfRjYY",
  "key27": "4pvsXmgQiUnxgURfD6QnjAzVutQUT3ocxga7BhZeZEdQnw7EA5g3bMWU1Lgg2WWHu3FNcnzCVRcRau8tULaecgtW",
  "key28": "5yA6tgS4vbJbCowhy3S212DfwHKFJgLLNnwXhNqcETYFt2vfYjtNyczSpt9AH9NVn71Ep7GXTdACa5muMGdjdmbC"
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
