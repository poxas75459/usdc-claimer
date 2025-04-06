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
    "haYbmv6DrZmLphTXJQW5dbKB146m8aMB6Njgp3woipn9dMDgqSeDof81XmZqn1ZwNorYG5DvDc4RMLvQrAJKs7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36iroGaGVQfsuyqbvqZnqQkBcxXJxqipmdRBBf8royUzi1LSXSHAdYEvdquAEHqvSvLTcVJPo2p1U4rhznosXDDe",
  "key1": "5s4TCXKZBbtqTWgWpXgZQBtmtNPN2Ekpm4uMRBwkNQ6YpGyuQtavaagSsnmaDDUWjPzxNaNuKtDirvcStBrrxUC",
  "key2": "3YFbLtVtEJsA5LP1ZeXgd8hD3Dd9BWYCUUnsG6RGoRbhTGNhbajeybn5rRL6iTyYcFRkidBW5rkyRZJhPQGdNHVz",
  "key3": "39xEuiHPVtB4bgGA8zgVEJHrb9xESznAoPmoUqmtej945c4HA3x8aurqURf3njKaaS9ptRXbaCgN6KMdu5ZmBpA4",
  "key4": "ekwHmrLND4Aq1S7hL3wuX6EtR25tf7TTKxWEnJXm7w4AaiqVgeoKYY1LAnVPkhGCfGQbwvBt8iiLfcf5LdGEpE2",
  "key5": "3MuruTo1DEuzwWPs4nGHTodfKMZoM1nqQMjkESM29MBAiZjGJ5AnNkHvuwZukYLWrNwfZziwtoEntNVQ2rFHsu75",
  "key6": "5Gpg9HFVQGjTUwGU25kaxNBh2LoH5kz9K5xyoBTGS3bWMxRaQM2pwwjPraSEVzLK4k6fSHRMLRpTWarhmZ5JCMKW",
  "key7": "5Cu5tgf4mfV3PGz6sTMqPhvpH8F6f6xdnTPX2DGWr1B1rmrhT5Civ1HTkkMn5LUr74TbuesyT1yRp2ReCRcijvnf",
  "key8": "3S2o8nR46rt3x46xR68f9DbMoyf16LPfV4WtjMroAStwo4miLqLrrTcijk2TwHgKcW5oi1aTEw2BzjxwYWrV55KV",
  "key9": "61BZqn8f48exVkP9ZAi9VMzNRjiQaFQsPkcuqSCNzQFTHXnbJ8aCpDk878rfmSh8Tt9wgMLiPMXJS1QnDM7qwGZg",
  "key10": "33ZcwgWFic9a35AYMTKEojkfyP4Jdydzt6uke9wUUVjVnBmz8jVoUdLdEBou5BQTPbUfqiKJDTSVo94kgL4Pq7XH",
  "key11": "5BWT3dNL3VWJnSc76569mMMYkWVg3BYRTRV5W3csLsx6TTeTaXeMhUFQhmBoKEKoYWcV2GZPz2pxDSXWpw7tvZh9",
  "key12": "3dcJYDhQVH7V5m8ErDJLZXVcbWobpuTaZ5RvzzobDEyMRGo61vvZKUi4e7UN6aUKYP217RTPidZtq4iE3TQdmHVd",
  "key13": "2HRfYA6yVNcGHn7CS8VS7CYV2rt9FPpFpwg1KDe7eSbmDyypeLBqRt3eXDo9MRQ5YhzeHfEHPfR5sTJuRVvH2ckv",
  "key14": "5cVaMiEuvaFuPCAncUBRzDTmt7Pa46hrCCjb97uc4sGBjpkskZAwnteRLMsoKvYuGKQK58XMxmRraMzRVxBWDCZv",
  "key15": "3uYv7tEtpKSRJngBgoeFsTproxkKuuhAm9wy538zy5vdQ9QpKBUSK85f39GBJXX8H4fEvbPzPmoz8G9GrJgMj7Cv",
  "key16": "5DoKdbsm3ZpVR7h6KLzUUMU52TogTv2ZNspCL7T5N53HekxtzBJXc1Hvuvb7CWLfnYWxjdexMTBUxPkka41nWByD",
  "key17": "5Ds6tkwsfvjDGeay3dRVW8xonQLUTpR68Rzu5aqZGnpvRrGgjekEpxGQwoZuSQqeCyJxBGcNPuzwj1i3eGRxDJ3W",
  "key18": "5L3CTpM8juMAncsnme6yyu325bYnre6T4JQS8zwU5sEYdnY1ffZuu3Fe76LEGeKRn6kvLLMWxXQuU3Rf6vtsEuMt",
  "key19": "wkwQPuZxjiRzacFawGGhEXvu5oMDStkFoCDSBVefKKn3nuiUty5A56Hxoo6pDe1hAke5pbECDNa9F79WmNBDn3A",
  "key20": "PS7czZzsryyCochy7ebDPPNbAWK6wr8g7sMuxcWjtLVqFa1QkWXHtHR9HTZGHT81sKyKj84HFhXcoWJKJA26MGA",
  "key21": "3374dbLkhGD3ksc82dmpXm6cdZvBikC4GVa37EPVNPDhx86bvHeKABuCVeEUGE99mPvjc7XxLDHBurFC9Kwq96Tn",
  "key22": "5n2S9cM1kzTFrefYEWgS8NPkgRf7nmnjuKhAWr5rogHTYzVAVrsycmPAAWZD2EcbJasR51rfgREcq7JjeqWzdcpD",
  "key23": "5NKjf6zxnpPKWrPAcPyVyiEyzmhqdhRuBsRgbcGy6qgRdgpn5T4DdBLekDyZ2i6h1HL4Bqs28n6Wy6RMPQsZMdHG",
  "key24": "3RwGD78Zx87J8kUY8AuYgHVvXBbch4QA1yyBuZeowW1rD9pr3AHjHPwtjyAoKMLzix1uXr3JaBE6FPAfT6SnaWuj",
  "key25": "3eCDZrfGvNabUwremKiB4xHn8cqUUBzmxmTrt97R1XAA2dZxF2d4k3HWfC9SgegiPbMDKtyC44AneexcKGfwxEbf",
  "key26": "2uc71JR5TfbipgzSWD5DqMmQd4Hb5FitE9XbjxcXnKpDDYipx3Z25gz21TECCyENjeFBewixNvsJ7g5J8JaG2PQ7",
  "key27": "26u5AyPP3MppkCX7u4E9eJPQpQ4EkXJ6trnsdf2Rc71GxcxaexL1kE3cA7Bc2VKdUTBnawvjurm5t1jVD3EGQW2e",
  "key28": "2oUrkzR9J5HDx8XjJ1SRMWmKBfWLtnLMMKzXp6GiVvb4QMP7viJSiLLuZRMzns7ZTHbcPppDsKLHV3wdH3tTCqJj",
  "key29": "4e5tvTV9UccoU9TQVhDX9QhwUD3SuG2sQcHgM3ndvkvrTrk3edBnbrQSJbNZQhPtCZG7Qe5n4ZPYJURRrXdNPvwz",
  "key30": "3rvpEUB8u6VSjnboSmR2ZCigVJ5eDuo9wEmRa6RaqHz1nKddUnKdQv4bG9AJ3kDHbhszQr6FJf527GLjNsAddA1w",
  "key31": "5TSJGfHEYMSN9Mz1w5Ak14YkpCHaQ4wrcdvvyqsVwnkuX51BgLDHPGpw1jDqrZqz1HwcYAwFdaZK1iGrbeKUtt6R"
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
