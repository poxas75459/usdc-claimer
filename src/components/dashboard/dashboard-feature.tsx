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
    "5x9izR4HjoSs7mWK8281bijuq1tG4rQ4YNDE1bzuB9pACNAEgXWvJTY9wrRrtutD7WNoqopPsWhPbLyXSGmTGoJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qiKtmVZ3Jf1v1PCdtiAi8SUY3hfMdfViGMGGiWrNjbczcqr363n1sG6e2FQY8nAU4kQXZ84nGhCMgGojZ25rdBH",
  "key1": "22rYzvaUJL6irp3ShZmDBofue9bKJjJQgcAfaNtGj5tHZzq92bcYPg2QD2EmzBpi5H4Nr4kxYJ9sv4pVRArWVPzz",
  "key2": "5EVUhVe6r632sv9NbxSqeH8mx2rPYABHpYP1LS68yUr42ap8TzkbRiw4gzQfnv7G86DFVF81kaZP2EfhcMwVrZ1y",
  "key3": "3ucXfy2kJzqPu4V2zyScrGq6JcM8gv4784FChWuBBweuZfdUtkgAeN6MTSSpyJbnttzX3XFiq1iVgH3cDkfiRTLu",
  "key4": "3iEawVoHggmBETy5oStP7L1WniXj9tgF9NTrwPDQRZWsyjWHq19NojRLXaXjVwewNUVzRRTDkJUNHjK6E4y2DryQ",
  "key5": "5sghA3Wzxzq6VU3YhniHKAo9dVwtjBQzzbKJk4jfDgaUBJeyD7U15v3o4UqvpwAZc25uP3hZbSBUX4vZ7mQAuA6H",
  "key6": "HmosDBkMEngYFsaL8GubHDS9tbwDZxWZuf51evupJJF7xZwBfPSpsWysWEqvXJPnCqDYtuRWgrptrevt7kV9YEC",
  "key7": "4LFAmnheEEZJ8iQpXJHm5pfWFnxA8CZdFtyoc6LvGo6NwPfsbETrPNp8kNvBJeA7jTCFcMZvNwk5GJnhMGrnys8V",
  "key8": "TtcV1NSpGF8ZFR8SdGcgZWEcemtBn43iPGXGrsDHTve4JbCrp1wLRSZmVZDzLv41GHRK8TBJ6XYPKQ8HpX7NM92",
  "key9": "4JP4ZQBP15PxsrKhGTtcWCwW69DKoXkQnYhGWqSiYA45iEQmbBSzrec2zcuR1bVETdfDpt2snRD5hz6saAn6bc1b",
  "key10": "4Z8vEiGozKQ1kkXFok39tExzKCB8gGEVKjQevi8ht2RWxJeUvibSUJUhHBKEBqrqYJPt2UqmeepP1PeceMWJKqbR",
  "key11": "5MAMaiURKttMsTmqNCVNByPzWyNV9taR84ZfaSAPHuT1CuT68DGtHnJXmCCxqHx3GRdE2Zii1dWv3bafxD39wQqH",
  "key12": "fc3rnGyuPSgQTe8UpgLgXRBFksnUE394V3b5fYVuMJvcvTsvs5m5fK2pjKhD6Fhw2M9ozNBmg2AUmsMLcza1aWJ",
  "key13": "551gTqADPJeCny4tp8yBpvathRQvE32SUjbentcVS91SSzXeo5o2FRrCZT1fpijrneHokQGGBdXos2XrT3CnBHGH",
  "key14": "wHoSQBjYcY8mwgQ1sEs4fwNQWXaX6nv5LGgXHHqobscEzHN7mmrPzinTa5ZBRURPB1tSX2wtdfdqJCGDqbUWyMp",
  "key15": "5b8wh1NWj5ikg1hXkVK4ioLNLbC2uevCqs3PA6Lk36pG93hhhYCsw445UDFrpsg46kwNSuFQqjDonuhtNEbk91X9",
  "key16": "TrGhfZnJnYy9AyuPBSRsZetErdxcKutK8oEbGMnfxKhy9vsSJv2NiY9dHv12fwE9nFDJSeAB8UHV9PvZY2gHfZb",
  "key17": "32W98sYQusQxJnk7BRFUQRbQt38WEyKq5uhT85TnDb4Z3zdRwYoYXduky88odvrVHMnTFMJH7cJX1PfpugJydFqp",
  "key18": "66tyRkGHm58YGWtRvtTLgXVYxXx67adco7LHyfruTAJCE6WQUYg3vDQpV2kxxjA3g2mefZuXwb5BtrZ223bZPk6n",
  "key19": "5wwG1sMuunnKGNsmPLgeZNLPqKHFvaHdxKSKqfN91tHkFuDHjwbuGb5JwcySvLFunsxEnLJCfHorxS5Lt524JR3h",
  "key20": "5Yrj72sEHTgmirj6VaxuhoX889efZYQe97iisrCv8YeHMFQjR8XrEfHAHp2wKHbssBicCzuTpiaAXp3tYuKSZ1wi",
  "key21": "59TQQs15Du2aM51f1cBLJ2dT6Fhd3rftW7UeVVjsRvAxfuiD8L2xGuBY8VPGR4LaH6d4CqNY3KaoHo1XaqF6tLpE",
  "key22": "364zwwvn2S81ZrE2yxesE2Ht2G43qdwt2FPV7zXMbfgaLqZcijdwndX5uPJfxwFieYHweZmiu58SoymdRXFTK7C9",
  "key23": "5gySeEFrkjceqUA5tVT2ynZzC8JNTkKkBTQ8TwMSh6NKcJvVCPprupY9vtY97mQsPzaucSkRmNitYsXFvLnadrJD",
  "key24": "3tSeTuG5b47HDRqM8Yvx5nFioQzaLfMHQ52MHbfzsZf6RqGRc61ggb2tjbtc2HbGX3tLRux8VYUzUEqKyUuUwQaQ",
  "key25": "4njncS37kYYoKsBGrB1UL3yvZFR3PiYgWgkMi7HXqWSEiLt3fkiqU5TvTx5K5WT34DVMVngCPsWVRiaYXhhrV6jo",
  "key26": "5Fro6xbWm2v3fvVrumoJRU21nqiExCVVS545Ri9QcLfvEvsUad1puLiBrmrRYSg42nj2ZzA4YpszCEjoDxeJPtEW",
  "key27": "35wLUtqDdLaencPzUetTu8Eit26Xb8ezhQAyK1iz9QD5i3uJ95Zovruft6h1UpfwbKYh9SFaAAkBfjL2dtLDDLdS"
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
