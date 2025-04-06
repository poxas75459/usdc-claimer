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
    "4FpqNQzat72TPgNWHEYeaUJ2DjkxeWtJDuR5oAZpypyZ7gevnrSsrAP9eMnra4JsVzuLuroeHxDpiHg99eUDrNWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nD81cTpr7p7iYnY5GT5jpufv6GYfi9B5xi5SftM8mzJX75yMmSNkXorKwTY4JTkdYdU5j3NzR3jfajjsHErk6YZ",
  "key1": "2RzYWHXdKpz13wGi45v8JH7CcLM9KyvDjSaBDycq75L7dFPNzf3DQUJh6uAUTzfF5JaYdFa5bkdyFg2tiR9a4T9c",
  "key2": "3fV5h9DeXfDNFAoFuy7qfmeYHdFzF1dDbRYxZ5t8eK5kU3dgsz9M1jokJCj6seeMDbR6UMXaB74929LPAnyBU3e3",
  "key3": "4th2WtnfPDsa8uC4ktiiewPsSQsHq4ForwbaSu2MFVDHgiEZGFBMGC5vPCgK3e7QvxQFp7r87PFvyTktBy57woMt",
  "key4": "nPe6NUKGquyAmwVxvRchoLZmGCr5TABeNxQ36RrPvh85ChcXAb4Z2t3TcpYgDfjxEtjExsBtJ46MDNPiQxxJPio",
  "key5": "2ZBsZnC8pbjepNbNQu4TKrUM8KqVPKPXY27Vdb6FKq6nV9WT3TZyT3pNAXmqUrUC7q24Gn3LZyUmT67ryQFxpNCV",
  "key6": "4iNzK6i6LGB2CYsjCP4tPATR1ZvpLgqpnSpwk4JjSWCBxKNowhGoUu1ZfnXaPjPt6wJfhmydTCCUKQnpFuCTJW1j",
  "key7": "2NWbmEpCvMb6ehGmb4mZ3uhN4LieUryiYsY7fgU2E8m1KMcaL7d72QBTAfXAaz5w56WoTYe7G5kshLHgsb4V5jgE",
  "key8": "3AWRQRZh7B6bygAvKmf4YdqWTe78oUuAKjjHo9vnFWLb2abody6FWMsrJan8zYfxL5qoCjWiPaawb6Nb5ACRK9Ve",
  "key9": "ojfKzVDTLWVpE5N7r455b9tZPKMsgSbjZFdtopCzQK4w9D48yESUsFqu7cDNGBaQWfz3gU4PS6ocp1ZW7HUpqi3",
  "key10": "39MdxVMKd6c4PD8zBHFUHZvYw5aCCe2tk2YYYnzHwLcScuV5CS7kZfj6L6LBqUMTFVfa74tub7w78pMPkNmNiiHU",
  "key11": "wpdpoTz2of4XVXG3vMEwf3jod5v7LKxLxDLzLXa48xU1iwNWTcLjxD1cGF3rm4QZEm3XSAo8a8pZwNxZ4CE3VC4",
  "key12": "2hZrEX3ENjFfUUkZXdtaY4JPynLHkeWRMmdZQ3EmesVS98R6tPjHS7kw86pEEz3XySkqKpetJWZxWhH9s9qmgxK2",
  "key13": "4yeFNrQ2tbqrUyUma6ZJPNtfJ5vPyBFyW5PWwQsMfbgepxfWUhJgmR1JzkhMqkwnT9XFB1Nr7ZRJ7bzTJHETggUL",
  "key14": "2utSVgxHv9Jvqm1GD3dCau9Ag1FMoa3aqZRadpFKk5mwdSNPfTCUTzgDjEPXcA44k4oPcQwY3oWQQhkaMNNHeAfk",
  "key15": "4d6ZJZUNBvp49RvRXTAY1wVC5pc8RB7tw6LMWaSCUSep29R1ZRZTz7i5d6niB8Z3MDCwFbDsYScUtG18D6DrrJWZ",
  "key16": "2kxwaFKkZQo6Nc5jZHwy52nrLcwQnyAtxL4cJfZi2A1Nxxn62jgj6SanoUykXeWzXP6tU7Z7fRToQhPUs98HSoSM",
  "key17": "4cYsjTrNqVxRHxnTUzjQ6rDgAgBp1x5oRXx8Y4NTfTheo6NfoAc7cA2vtkuc4sbsLRhCjZABgZ1tJtvtJaSxxHXB",
  "key18": "281CDYQnLgSJGsG18x275EG8wxE3m1bTJcnGCeCEJaYK3QY3YALioMfS75acqxWQxWdyGPtzGqVLt8EsRb8easG3",
  "key19": "Fr9Wx4fw8oFUtnGjoTPNkkjeSdNnm12jyssh2btWRXuda5Vp6MpRyJCasLTDFxVxpH7GcM7VSatZcx9YD5p1RZG",
  "key20": "75Fg7dV8pMos8RWQsbZ3N9tCBLn9hUAKxHaNxktznXicS3Wze4UEKHoeQxqbts7hf59GqVp1rVRxio5EdVhwRG7",
  "key21": "3F35igjYoMmAtmjFeWAPz8iTv2haDdpC4bMgG9792UPaUQPRPbqdZqL3NFPtg5xQK4t18mzTmNNQWyEFMVkFz1YJ",
  "key22": "2c3LVETYPjTiJ9McBW5zV5reGP4AgaYHXY2g3gkq3MUfznXJErY1DMYg2rViWRYxyZg8xA1u3JsqTHbYXusf8iCa",
  "key23": "3qxvzBcWCi8n2hFWk26sFkcM4fkRcmxDp5MmonVPAzfXsDaaRQtdwRawkmE6GkxvKtjpKsSNuUFbLziLLyUhAaR7",
  "key24": "1PGMa4bfqnS2XGCguUcXKpnv3q52TeBULRSSMK3yXYzeQ1G31LxQCXXhne6t9JxDpW4bHNSav43v9x8xKUwRcLM",
  "key25": "34en2EotZB6T6LRv8drF7DyxrWjLVH3mmNCXmG3kTkqBd9Tkuq8hdPocJS8Yjn5Mp93Nmy7eB2tJZyKFkgLM6dRK",
  "key26": "2am92nGqzx6AchmjtY8G2EKiw7q5Sc9D2fTprmav8ozmw5ZMkDvaDcCk41UbK8dXRLvSqNhHNWC5DpX8Q6XdkwVP",
  "key27": "2TD92NZnbtAkeEhK93Xud6jYGy5j2yiSt4Qe1SDJLE7VyzWouWSu6oNP8xVnpasYhptoRDgNuVF8b4D3vfctZ7fD",
  "key28": "2xcJcWJBiKPvnsBP8j8P2SmnpX8Ar3vTKxWVyStNANMMZM4yuGfvsLBsxqB8wmp766T1Q1s3DymWjV7j6ELnC5u9",
  "key29": "5WUL9YZ9zZLNPNQwwvtgNmJZrdBB4ZgMs9BmUyQBpsXBCJjFVTXvBtyTAbxuVpdRAEYg5wozDcgghiLayVPj1Esr",
  "key30": "2nb4dAKP2x3fdnnpggep4jr4U4PF7886GJCNNUCAv3n95vdinMvqGhUPmaFJtTJnraE3tFxFyxhR5tf35K9WzQdr",
  "key31": "3mCoNZjsxiu2Q8uMyixF8rnHJ8nd97J6jvkZVFgYBZe4SyHcjwyZJsY6cdE2oNh8QxiGmmU3bz5RBP2NRyyT4feP",
  "key32": "55frJuuUXPLzomtTNpv2C4PcdEpQnPdqLEZVzBvDdgEwVHoTnqy2kcu1NJXFGVvR67xuXW8JUXSSPDSYRrh2z2a1",
  "key33": "3uc9GBgp6LZHPmQod9wM9jv7iDDB54ikpyEnyjZ3sDxFANGmkMfGhrL23VNUDvYNnabydyQUf1duUxGWou6xxLqA",
  "key34": "oPBt9PLdW59pwxh2YqxS8jM1aQag5px3LXeEEuQNVEJ3S8HBPyVci1Rg5BctQXSuh4ZrvGqPajRCWmLYU7GYzMf",
  "key35": "5cdvWP9A6QecCfBhfqQJWZc9xeqb2bX2tGczZrM6wyT4FbqeTrpseZwPUugqcSg4aSffhyuVisP3SB3a5ddsBj7p",
  "key36": "3ipeYRN85fUAtpTbBmdNWUaYqEwapKt8JLA5f1Z4U4BHpni6HHYwQaD2AsyCZEYHk5evJ7mQvFvGVsWtcJKEB29M",
  "key37": "52PXktx3kTUtUHmTM3FqqFWD9td7FbYQuNiJmtYqhC2b3fPyHbEW3N87ToEvKxwhgFRP8gxtwmniSHDf1ErSF6G3",
  "key38": "2gJLYhackCNHY7iU1RuuPUu5hdow2Kna8VHPkiS6S2pQMhKXMhxKv3YknqgLCDdTQdia4haxoAqzS1EcprpyBk6x"
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
