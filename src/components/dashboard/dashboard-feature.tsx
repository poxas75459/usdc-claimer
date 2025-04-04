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
    "4rtgTjX22RyeG43X277pyeQtG3rxnCZPriehb5hiicyKRhfJvmiDv43wPZfcpkX2KvCyGxgREjnDXW1UNDLB2a3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrua9waVdtu87SRhAVeonYMmH6sMeZFMMXMrgHt6EXqKjovVARPH6me2GnTFdKkYo4tWSa2pRBDvN1GufMj3y2u",
  "key1": "4kpurN6CKCvnq6M5JirEFtiKwdz9vqNpShjdwgVmfT2s22Dy3ZEmDQM4a6ojY6yNZ3mwm1ipo3uKKkBuXv1SHLen",
  "key2": "4sfeaGvhW4ETF8cQjgjYxcfbHp681jFaPuKpQPfg3CCd9Y4EWEUsMCh3WXjbJ5fWyfupUdsvEajkcjpW8YVvtQds",
  "key3": "3YzfthYnMbNTU95bpuGP78YDXhhu89t1npsBu2HHjzX4WR8G7KoZTT9Eo13Sgfh95BC23TLMrp3fNeaarJkarQBB",
  "key4": "57f5deHPDhhmcvzi8PuKrc8XLfuhJacrDgwZewXMVKaTLmsVsSJNrd3YFecmD48iA5YufoY82yTzNorHqsCiKuBA",
  "key5": "KBBdH3QYi42NF72EuZHq2VykBaEdat3eEqDXTbEctpx8LMzvZL528Dfp8td8Dpda9tmNdmDr339kxUpe5KW9Au8",
  "key6": "5vayP655PJgSzHqSAoqC4Po3CcZfWKgWRE2LK1eikdcV8xvFx6tjwnTZ1MUMcQN2cDXkFw8YVDnn8ibbfcTrX9aS",
  "key7": "3eTA1ReuF5jGF7Arzpc2bYT1SCYKsNjTAdfT6z2tfWDeqgQqTbPJu2jziL6znXMuk6kGutn9wxv9HztyHvf7seUZ",
  "key8": "4v2pNd1mdACgRE8Y7rxh1WqkcHcPYsrf8uPwDnARJUy61HqtzmKPi6WAoU6ypbPmvTUskZiVypzskV6bMCCdJr3y",
  "key9": "5M1dxqsWCk3gcoAjyCpzywRrRiHz65WGNQBe5QXJPJq41LGTJY1A1Q2BveQEvcKCancXvBTi3PgFwhqhhrw1uiKB",
  "key10": "3vPKYowDMvCiTwyxRJzQaBYYA7x8WERuy9WtVQRKE6nQHZAWzR7tZjspiobgvNWUT9HggUtKG4HBHyQQze1S3Tiv",
  "key11": "4pfWq9Y28kLcU8iWYpzw2qEA75MFXgaziRpLPBKqLvdfkHL81ERUwb1A7Cfp5Mgh7nHpFfnDWMbcB6iPQgoF2WEq",
  "key12": "3gFpn1d2RufVZVZKyhUaJpqW3fGJVT36wkBWmvRYQbSn8ANdUyTjfJfV2hefhicjPQ1DVe1hpDJoEvc2kAPAhR9i",
  "key13": "2zgSpaY3ZsaeZLLV5iKtxrkgWMzFkVGF2wLRSW1qRUye3p4qQW1JZ3N7DUdbHQbSLJQ7EjaP24nPapJrfwYYc7ve",
  "key14": "4FgymCBS68vSwZe4PtGM1RmmAA8fPMb5rHVPYkCAPfL6jSmQmpf2pqJe5MgfM3KhQQA963woNqfi1ACFyRrf5Ff8",
  "key15": "4dn7mrJ76SNXhqcxUAksEDA5sZbR4FktWoDQ3JBPgtDJMVJnJP3CG9kvbeVD7cvbRh4BWu4nuTcZS7pg6pcUmV3c",
  "key16": "418Pa6RRuxxMj7VjsJ1xCDEuTfvRCVkctBLVbUk36FaUCfRXzrJCbyfSWshWURsh2RWvfrUpwEUMyZJk1RZTTw2g",
  "key17": "2SP8Zi9EH9VWEPGdSzqGep34LHx7eRo1PijceMRCgws6KJLq6xmd5bSdrNtcWQWXTGQDEYoTFKA7oVDgTR7H5dTx",
  "key18": "5P2BqqbytSTLreDa1R71SSmvCAxFVTmvLE9woJW2CDhcTqba9H5QQTMnrrbczrmbink7QNzrE5j7Kn4MXQiJf5pJ",
  "key19": "2J2Rnx3wTqirSTWFgnH5TEoiDAJPAFs9J9ivetx4XDwYUhFFihES9GDPL2cb3bxVFyfqSuPrRbx25uCXd4dee1VB",
  "key20": "2LUb99nAKenoyxkJrStUAvVuwa6WYMorRnrJcNkviaG4Ba4i3a33tjrA6FDSGcHEbiKWr2npXg2AswvQvxRWzKCT",
  "key21": "257VVU56a4PrnTxog6cqh69hdHiiDtmirgB93ry1QDXd2NVwxtFCD9TGzCmeLNq9eRHv9gcNgXT466ztSY1GtdUP",
  "key22": "2cLUAuf6hVMdx4bDvaaTDgsbnTfQerw4x82pfJkEY5qDQosuLk34PuGjTXJhzZ1XDDCjdR6KxuBVpNhckdTWaYwQ",
  "key23": "xo2sNFLFSFZ8ovpFwsQpsUaohJQ7BSekfAC5ZcDmZugnvJ8rBqtnSXjHcR42oSSXPhSZQ5mLZRft3E9P37o149V",
  "key24": "LnjGDiP6Lkpv7XMqfaha2EYVUaoZ6mGLUmJ8oFLN4T5eizwA39wKFmbUwhrTboJQcywmHg7KJYhSUDNpCJuJZCF"
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
