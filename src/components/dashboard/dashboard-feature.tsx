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
    "4BFQjEee1Lvd4uaBa7DwAaVAZEz6LJQCdgFjkXrCw8aWiJ5kYes8JWVDY4qwepP1TBu47vTXouxzzQ7j5hDSmYGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X7vSo9sGGQc7Rro8PUrPknaNbqM2YkiyjdpzmuNrtTwEMH4CaiepY3me3CRa3DC62zrGas3UAcHNkWS3q5JWj1t",
  "key1": "Kv2uY1HKKiJRzMpfUGivqyyHYWfCFmere8CNAyRpfSqxmEv6SnyPotu8gpY8qWDUk9wcmzMzF1Mw4jKNvZh9LYw",
  "key2": "LZRFB9LfJkcH38ZBrjaVwMSjJf4hwK9TufcRKxEXyBoz7RHLVzSiX4eKFuk1csSDTCChiHy3C55N1rzHPCtfsK6",
  "key3": "ZrpxVfqRzEsE7YiRqdH2pZX9q3JFQGf1jMYwW6j8hmwTuWmdi8B3zTMEEBsMV6QNWSm9714qUKCnf8iuKdhVsu8",
  "key4": "nEjKAxh6fftEosxKsEWNexUPcdESrxH9ZsRep2ejQG2X7U8KhTMg5FEDGVVykHc73PvDbwRwd6Y517PCGKDasdo",
  "key5": "3crV67zmMHcM47xrCUteQYbsexti3vALEf5Cr5gybQTWDFCTUCQtpYDrAWrKs1CDYL4ztDao8yaJzy7yA8Xg62nb",
  "key6": "mWDxHhgrFCAP7jRVSVKKbWMHPxKREecXXi5u2PVsSFUFYyTV9sPz96g3neX41Q41zFa4PYLszF8Hp7eZhH5eHgH",
  "key7": "5aiJj15rn1GnYQJLv3fRofpoUnT7xHHWVpAB7HUyPcjNnPEd9rRAAkWibsD4XEdupDGEtMGkJLnotBabREx1J3XY",
  "key8": "3zkKaxoKX7cxijSVyUaEZPD4Bca2ZsiNQGEeezAcEJnD7BF6GQSNPNZQqXDvW7gfUT6kzDfaVcB8uauP5mdBosHj",
  "key9": "jyt2j3rc22yW4diderTfoDgiDTijRdRUNgqXfEpVLSvoEX1iZV8zSdq2pzZqpYo4vktayftAXwxwjELNbt6wbiC",
  "key10": "4bEBZkuGMYUNWxcS1qPFL1PMnr1pJ75hn1VmAwJrN9cJjZdeQYstcAni4bBFEsF2DuJDiwThWdtH5kVm94MT33nE",
  "key11": "ygAk3Rnd1uZrgiUnZS5EGzcNuMLXH89qt5s4zhecFfiwCdXWt7ePjdedimhG1K2mo5wL41M3MF9aKLEAV3a7MUN",
  "key12": "5eXUy7Tm6avRDrGwH1LGkGZfAbrhFombjYsg7CJBXSc591WZSiwCSFL1eHR7J2tPag3nbrDwacPk5tJ1Zbwct8bH",
  "key13": "4i5kYfVU9UfE2JD8wpBGgwHKASzxtBGspRkm3CsyJLnuXeKJbJSMAR6X3UAKKEr1Hb5Vj55HaoHBQ6Qf2qz172w4",
  "key14": "28VaftX9q1xgy8KeoSdVDpf7jp1NKYnBVz7ijj8BhazJ4ViJdyutqbuTJHy1gSXYktDGDknH2r7bLRpcsGwUxqNu",
  "key15": "3Hw7UUNsmawFWcpKgvFCykJca9ct8zYV6Z3iFVsHvjk7NWK3dd7fy1E3TYu6A8PiQN8NxqZiGFDYUqYjk7vXCRUb",
  "key16": "KXTEBLad4xjySPoYAzFuhTFzH1dbuwCLYPT1zCrzZebea7Ho1QNUrW6VjHBSBUCxLgGf777uRh8nTdCYEGhNvhg",
  "key17": "mXWBfDH1tLaGrZ1oXnCdgqzBXFZWniY9PNifZP7huJaSFWE4p2RqUSuKpaTcFFuMzfqyY2vmwR5dA8Zb9SuFK4D",
  "key18": "3YdwqxVPkUcNNj4AgbbG9tLM1NLMCZGJ6pe4ekt32qPKU8VR8HRpMTfLkjYfSjwCWMnfmB9zQ5fpqohyLkXv8365",
  "key19": "5cCYcSwkFEGav3aA5FWDs8CCg2ypggE2MfYrJYh4PSTMF9gcJSTVrewSBFBAW8FDcrVnij3zXWktVyokDpdu3uTd",
  "key20": "FxDmWdGTyFxew9WR6rrv7kHkSwT45iaH9qQ3TGXsYR8T25uEfzs7NVvfuyGU72aQFqmE9cDWpAaF2eAsHgNofv9",
  "key21": "4ZdzmRqcBmic9yNNH6wQ7FkCyiLjSnqBtUQE6AKvzm4A2dZJ7R7sbRi9AGsx2QfACWpS3bH6WNgErcksNv8VE1Zb",
  "key22": "51JDDGRCP2znyrY7ctDa8LPXGkDpBL19pLVY3a4EkzTDZqh61CHZsWJoPrzjpTV46o4gwWd9yW8m6MBhbDpLxdYq",
  "key23": "5b2SSKFjegLuFpTccCrFSf2DxbmUuzutFwhWXWFkCahW84vLkXUo6rHdrAGuVoEQaNd6Jk9vvMaz2fzD6UtsW3kC",
  "key24": "zaqbKGveXrnz6sLys1x9C5whZLMdMf8F9AojZXcqMBHpfCfdB2j2DHSopZhN2wVjT9J5AdVes5higZnPTXbKVp8",
  "key25": "4BePVVN85AgcspNxmWRQ8oEazKCC5mmdtT9fYAUbt131vtfRXvMzu8oUej4mKXcQkKqvFe4JSfa4hYJ2i6HWjgKe",
  "key26": "5GdkJUnxL5meryXij57NfDJMXPDE7MzMERW8sZKMhoDyW1FfEhU6sYNppet4RZXGGpUtdSLrogmwuDZSKRvNm5Zd",
  "key27": "5CmF7gr9MtE57rpsbgkiAru5DbG8HtkvdMhh7KujeLsSnnkg6v6pd7TtxUnurpDUSo3y4Qz9gqNuu4oSPVBMobb9",
  "key28": "2LiASQqVYAzMSwckCYUw1w1dTaoXCoY2vB77LpG5QydmkkE6Gtp5kSMMejjrsarcC5TMrtjk4S3DbA7K8obn9MEJ",
  "key29": "2dBWMXwKkYRGr1JphhDdpzVcwJqWgH8exC5tUDH2ovV2SyZdJysqZ5jXDrFLiKraU1rXYunC7SE1EnvrmAdY4WQW",
  "key30": "3LVKK5oizhuknK7DnygcSc9u7JviXABPRqDHJaHij7ZoizpxCAYU4HRCj6YhkpoZyYkFYXdxXh2na48Bn29WvwmC",
  "key31": "2irXRWKQqarQRafdRipFQwnTXn5nJ4PLMr1BF2xetcCRLpzWZGXGastkH3dyJQqqFvoFVTpmtM1CWjLwMZn1C6H1",
  "key32": "3P6qNmxjVi87MREWdqZ1sczxGUmfKQvtwfNo2o3ziBikwSN2Z2GqjTc86XRK7kgZa9uTrg3eq43yvw6k4YK3Br6q"
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
