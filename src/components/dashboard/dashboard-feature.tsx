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
    "5FaJBUahgBS8xgUSsAsZFsehCaggzWXuNT65RJ7jQL249vHE4fSF9XyYNvjGFfh65d39rzE7VDn4fifvtULiTNXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2XUb7vaWnr26iNXg1vP7KXDvQYvNHBMPhaAuxtwB5WBhCjg6fcoGxDwa8MyDryB9fuu6h3QvV8SwvV8z7LMhLJ",
  "key1": "4B4DBrXScZaEqMd1jB1Z9x1FH8sLxPfX89naQcPoS6bk8kYQs6quZkdXXnuVoFZGm6N1xuu2CPYvsYzhTUpmgimP",
  "key2": "47A14bUqbqCAyE2yHJXkMAWGRUeYqfV6QJEfS828DCH2G3QMuCmsB8sRSyX9XQbDA5TvktPku2NpL6Hok6wfYeuH",
  "key3": "3Zs6H3ccPbCRfEeaKTsqW3sxM6A4rDXUCXtDSEmZitvNXENgC2gK7714c5WKYton42rNykXzy7gyKAGGWmTuKRaa",
  "key4": "3jD8YLquLWwLaPddNvGYcmuN6jpbprRPLofBSFqdGmbcQithQ9wpCMDSoKbwU2cvmcNC5R7txFTCtoZaKd2YC4xy",
  "key5": "21ZkzknwZdgZK6cvWgnqLhG8wnLUbqx9EyBCUKYKBfLoQUv5aLsgNTiUPdFmiz6pLarbf3VHjr6AEu9XY9drQPBK",
  "key6": "4P29B21xhsAY5zkvj3m4Y5DGqTQWb5dLPPgdgPVNkjBZYTU9LYpThXGnRPsuNzK4hNXpcWqMPBB5nopvvMaHxcgq",
  "key7": "2Jpfs3MQsm2N68GRYL29Kw3X5nAouaj8W9ZMMVvtDCWJHgrDiwasE4b85TyCELkthXraYvT3hp9Ch1wz4WAFDhEY",
  "key8": "4KFAvghknR9GaDVCFV2MkpE9AuncSu7nXDUw9zmX5Sm76CCfCy8EW2nxSYKUAnfW9W9nXEHPotEdwgyusGCcrNFZ",
  "key9": "2ceH2gqbyj1Um6QDRfzNLJpHGZB4qxPLF31MR1rAimRA2cH3i3jtDc3dyKM39ABaXqGFBAKVdoGzXqRjVWUbg1R5",
  "key10": "pfpKjJ23ZZkqij6MHGXB3xCLMYV5PQWKmzsYDj2vyEeuFfMiuwCyUEFwSSnsfCr7aeZunL8ZcjfFE5Uzovw4qxA",
  "key11": "5y3CXUAMn2Lp388SgWDeQbMJXECMqqP859jtSSFFZjcMBNvt2Ba4qBEDGZ95WkYSCDcfxe2ybR7ZPuRnJJKgwn4Y",
  "key12": "4FgYcbWkqRRrj6RYWNtFQKjNyT228PxTwWZqJEFfo4Qxs1pc45Rr9voAPTSCURNB3bbsjP7fTt7SiT64sCzmwAwe",
  "key13": "4waXnw7Ka7gUPN2FeH8Vg2Jmovjufd83AgzKQ2DmWXJE1uK4zrcwNrDHGFFJU3fJN2FJitEDsmuYmxZR77skPs6T",
  "key14": "3qNYiUMRuWaZ56TPp8bTC7m44WUft8ebMSG4uWoNhaudzFhwZQDh51cSwCtXwqic34xe1iKhLDwAkiwbpxAujy2g",
  "key15": "5NRPER7RGcajEdrxBDmfPpouqChGSU8gPmt9Ss3BdHkiv9JKETuJe8uvtti4N6GpYbkz9E3T2CyFAPCws7P2Evim",
  "key16": "3jVG6kSgva3QnQ5AhtYka3h91cx9XbxuYdARVhxSuVGQPZVAbeehtum7fwq34VY2ZYFmFfRhinKAtg6Gb3cM2ugS",
  "key17": "5qn5ZpP7iv3NKtgjXik4vQkBeVxn96Gofg7iPu18NJW6JAH8gtHs1MZxDC4hKmspW9GhAExaqkyY7QfT7Uuz6CV7",
  "key18": "3YnyDhhi5yn7aaAEPpkNY9XuUJXB1uDPHYfBJmjwzBNwnaYoWqysCu7yExf9ptWMLUKzmeFEP9kPRmG4U7nQ74Zn",
  "key19": "5VoXZD7ETkTBMFNQjYcECpbHuFxzetPP4TZvMfwakwmtszQ8oeLU1fsZq2eXehxjWnqTcTfNi6d9QctN6bFfTsQp",
  "key20": "42hWP1Xsv7yxswMsryhrCthvKni5YosbgjqFJ5SDzvvfnmz3QAmmkVzdEKCPyssvq7PJaKUZLF1bDeLCabfsWC55",
  "key21": "2fWdHDhAUUoVDUoJxc545tQSWP9Fm7qPkCwQjbV8UCXuuWpn2gyJkHnSUAfKwV5YPkqPt1gRGcPXuiNtnEdpjpED",
  "key22": "4aKnTpKzUgPtDyeXStRhspoKWNtL5UAbDazQqvuWncNrYSHbhe5i9TJzKeQdrhaauCzK5dBb8J2iktxdm5dzxeh5",
  "key23": "8nFjfFtsREC5fqwutH2kMB9BbqHUFAKocMcmiv5ieqfEKZxCxoARZY4e3ozvzZx49GkPPu9ZDY6Pie4xuftnhzR",
  "key24": "2rsQCu4VzYGST4EJPxwcThK2gMbVk9mMyeRYhBA4iZjwYoBanJjdKnARLjxFrAbCM5nywFcRWZghSe58yhYvatVD",
  "key25": "3FTpRCQwa9xtpvzDoJHJxfADArkxRRMRagywQZTaRXeRUEy9dCpCAgD2ATtCVH41X6CnUic7CSKz1yjyVuRuqDZR",
  "key26": "5pYJfeeicS3CSLhiptZXaYGorj8FFKhCLRfeRc2gQygiPRMSkU4XHGbvZscCHfP7q9h7osFp6um6isANYw6vKiEr"
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
