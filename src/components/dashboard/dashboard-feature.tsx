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
    "5jNMYfHyTL2UHHfKxhjQDqMk365BStefXyy7UTikzXkp2YgukJa7donw2st8bHnaBJ9kmisXQ1shLdeZehzFo8iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ga7ahER3Q5HnmmiyUL8KXzXsuW36TN2UQaZfw1F3ykXif1ZQXB81frKVvBvdfxnMSuxw6cJ187xofuScVdVNL3",
  "key1": "31rBrKDz98LrNNzjsqQ1QcTfYvZn82rmpBWbg8UcZTRJM6MjS3ie7rgFJmyyu89eXgLCYwBVgLFMguRKwvc7Nwh2",
  "key2": "5nYKyCBay1zyqtnp9ZFSrU1rWhpzXBdTAY7eWBpB6vXqMwMC6DvDKvkKWNtNHSwYYSFRNANkE7JMS7BAdf1VqtSD",
  "key3": "2gMtnWxjRPPzst7z9KWUV82abGddRhyySzezSYYMd5qewmXzw2ezUy84t3DZfXvUaTaFninERSz22Hp6gPR8HQZ9",
  "key4": "5fx59Z6pynhquZ7stFLA4o9ws3Xgaw2KE8LZPXgMaPbVzUYJRRMdAaqmnRadWTp4AKJHzqScfANZDbGakuGq8zjs",
  "key5": "Ro9nXMemsKVNGRu5dMMGGAx4QSZ8qDoNX9agLocZfTdN7yfWMv9gK5CK4q9Y5CFzNAbbtnCLwsrykSje347g641",
  "key6": "4Wq6nzWX2ok19LXeZbaRyqJzhmQHEhNT7st7cyuJieNv2vKX5eMcL431xvqathiC75qQjegrZTttf25cj1tMmsML",
  "key7": "56Um4h4mACRYWthJ8VnciEd8HbvEpnSMf8XREsEtagHyvpP591RTwvPEtLQEae9gFAQA9qrA1ipzdT6Ri7NVkLAi",
  "key8": "3diWF8iwps4Nz8qtywyyvJ1y8ocWxHdgYYGPkLBwRmM5Hz74BwKuanUrU3Pteo2DiTkVSPDcaDEhJ3xdh5hdGRBV",
  "key9": "61PkxvTxKfkM1VonVgNmG7UQ64Ec4HTkUCV47AXj3DZXU4r7K5z6685o4R5zdGmE6U81kA6UdQ4nzqXHx1JutNfs",
  "key10": "55pVZESuooMZUJdi2ZmLDTiSDs5GTKPsMDqqsnCJg8odur8Ev6niRSHoWgypiEm86cGxd66m9EGCrahBsSNztJ91",
  "key11": "36LutByuaZeDFacA4MLrjYLU2i5Ahf64pUGmsYrfGc3MLa4n8gdQRPTsUGfspkBBvFNG2GX8sPeThyHf3piCBwkQ",
  "key12": "4YiMnpLu1TjSNYcNkiHCsCnffvgkRWeT6KP7BdECF8Uvh2RttQ3n85wB4PQSMPdd8wL35rSCgtayKLqJ88qhJKkH",
  "key13": "51B12RhSt2gZWdf1kr2JjyhdugtZkKe5rqDSh5GfaD9aDonZnw19AU6hyLsRdKgznB5i2dMGH6jazV2p9pCoZ98G",
  "key14": "3g99kmYKmHz74mhg1NGNjZnCStqxGam5X8fSg9QcpeY8Lb61UzJ7EhAsiZNwoKaM9bT5NAyJBxkAWcQDoq6ZGCTP",
  "key15": "3UZLg8S1J8hLjWCTVProXvoDxKXYjsT9GYKnGyCXP8ZqhDrG1GanqDWHFe2v5ha3JouMmhfGb4p9T491SwRF4Ubm",
  "key16": "5PPVnZcFifDtXkdX3FJ9mgiyvuUChRoWkRw6geL47UWS9SQCHcYi2xSRuVD7jexHfaSiBED5m261vygW475N7bNG",
  "key17": "38EvxT2poMULHHLnauL9BjgEgjz7MHsm1Vk2aUXK8JaxDrgsbbNfWmMhm2VD6G9UwjSSCqm2opLwjZPRtVFnHT3K",
  "key18": "5qoX3VM732Mov2y6BhoyCgXn1gAjNhg3KbQBPdoaaVkJELienH72i674erEXZcU6tSxWodVngrgiPygCXsvJuyrz",
  "key19": "2RuxZYSGTGrFFsxKGcz8PhButdhtnGPcZKSCzXA8q5PmfXoFYQNFBJfs6HQvuEdC3Pm1refJ9eiNk2nyvrqC7HE4",
  "key20": "5FNmQH3XSd1xsywxzmQTX1KUcCXQGuv6jh7hi31VZXydMF1cKfmT4r9qZqkhMWDBkuRWdhbi2fSSeSeQuaw5kXy1",
  "key21": "4mdnzyKLY1uUhWNaTgtovsDx4WCGwmArMD4tAdu4aXAuYEwBFiBZCQezXyJvFhEqKSBXYL7722BUe3uy7Kt29y3R",
  "key22": "V4DgnRGGnM4bdUZWeg1PBtK7o7gn7AaPpmhU5TrSJzWbgdkP2RYQ1BBDo3yFAtdaRvabjKbQBzL6HfMx1MaWZNr",
  "key23": "956FRVkEqxGXbDzNMyAp4DS5ZdygoRifLbXg34nP65BEG4KVQDW9qC2MGkBunnnGRtPteh7pT77pQDBWDmTabCm",
  "key24": "9xLsBovbibfCcdEP8w9QsLFfPiizkFrJQzZ9vni4NWFKWzUyzcnXscPwEcsqBtE1awvPQyCdoZPn9jZbhpvMmCB",
  "key25": "3L4D5Goio5zCfZrZxrgxAT2Z1oyzMmqGiq3sLeRLVkdsxPdpTGuWFYvjTPnpPc31Fch4Yg3K9RVGZFDq3xgQZHf7",
  "key26": "5HnUb5uUANWrPb4FCk6r5RNBFqtiEgouz1WtBZV7rV43j83EvmAPt1WkVbiefZcAdm7thNx5HfNpDkUr8f8kHc6S",
  "key27": "L1NZ3Kp6tSeK2uqAVLFSgbgnd7oNpr8TWFLRdb5m79xvoNjRBcM7rHPsyJQTnteaNy4vLoQvwNq2iYBBW8yT3oA",
  "key28": "5sb7gRGTfRt7QDHUWjRGhaXQEoNGSuQJCpUxXPeTSDKk5juRWNpKkKyebmUF5Kfg8JKYajreZphnV1AJdar1Kgu2",
  "key29": "4Hgx54XxF8hGzkj5bRrL6ucaP9eJFqn8FsvdLsvp2VC84nThv2wE3qnaETe4cuLvRG9BzGkhCjeawf4aQTmq58co",
  "key30": "22CV69jptugF9mTEBgHxsqXpBK1W8tyTdL4HCMtE2cYBojxZT97qy5AdxZtWLNuSv22eYgz6cCoGBYFHh8rqkio8",
  "key31": "5eaHFNsMBwKJabrw2nbvfSc1fsk1oBfY5fKf5j8ffMHX5vH2Tk4BFHJxbLmvi2z6qCid3rKyaAcaPZ1H2BBhkeqW",
  "key32": "5USpPtfEmRvEM4Di7FQacegmxCKSsdZTr75tfhYhrCCiyJ5ZhsGzq1eaFoqMQD116DvQqwmA7QWLkRxNV7khFmAj",
  "key33": "rvRFyAKQ4A7jmc3yjQKoi1EmDNgAC3vNXCAB6peVbVu65gichYppYbj4XhrnvkCosjXPUMqi7YQts4MLh1CSRuK",
  "key34": "FpANqemJjmmJv197Vzv1vpyR9RYsNhpHeT1jxSHnv3dDA4YGLoPBx2weBiXMB13MT12c7Kg5FefsHP9yiv5VghA",
  "key35": "H1Nxm6EQKT4iWanTALabV1eBr2EhEmW4NZDchkjhG56kL8TkvDCjU3iUsPUSVp2N1RmX4PgFuCxNpQaXYmnquEL",
  "key36": "3Lk7nqWufyboFdPsQDMRK3TNmEatrDMs9aYkrDs52mN5YEvqaAu3yncSwSCRoztvR9boDVsG67zvhjPSFrAUL2vz",
  "key37": "5wM3Mp4AFsKYACiYh3vWHie3mTrwjaowVnbhULGKUkhVS58iDJZ27bLwnFVGPkhpRxHXSjK9pUyVnPPWvvyLqigJ"
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
