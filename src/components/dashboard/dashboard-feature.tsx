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
    "sCW4Rh9GkRCpNNxGeiUoWbS7UJ6w2fMkyw1axwHKNC3v6dWXwxeacdn7BZZ2CspKd7EyqTrnF4eHkVwcqQhgT29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qceSQzvEGqZybMMtKD2gs1mT1n7aJtxTyVk47mMLVGYxRBQpwEFScr1KSChETfLZLCwJK7xu74BBzmwtquH1zMy",
  "key1": "5choJECSXjRPatsUgPqQiFrYa3eRyHcu5VGqPJrWXBMzSfZgqsD9QK3ZBbhY1gBPjQ5Cz91S1oPiV59XENWrzEU5",
  "key2": "KJCe3QV881PVpy8QEgr6DcLuaufRAWytbqHHoJSoPMVT4WdpXvXChTVcvaN761Ln2MhmQAK4qps1o6EBd9V7zQv",
  "key3": "3YF7CPijjhyBXBwVKACCqJKoRgpjocrFdsFKjSjNHtwyEASueuKyaCrDjboTRJ6tbQdqekDTEq4AgTMtbKtgirAD",
  "key4": "5GXK8vLXNwzjmJTB7Yxk8v24yeDfPcSKXdcfYptEreZnggoMamxx2Xt9zou5ZCAzCHRdKnjW8mDrifMkDx8Seic5",
  "key5": "66Z29XmwmVWWeGGh1BpH9uCWDg9QhLPrxVQJcMZH8CYjFkqkBx1jMfxKsirThu91B9WbGKu34xVqFpxxQsHMmvdB",
  "key6": "vb3tpiFVqXSVHHhZZ2VFV6mcnXq3QAzmTGNSfeeKk8PB5vBctXvgVUuZBNRLRMY6HWW9uvioMiZj8eTHufvLoDs",
  "key7": "5QMTw6qcZgqx7iTy6zH88x4QkSvbnfJi4LJ9ioV2AJM7oiFB5WWAQvnNSPpEVDJLsRoxW1XAPV1v344XG82nNocJ",
  "key8": "4ztvEx7a3FVw4QVp5qMAoknT3t9uUjJZ69H5wP9WZ6ba9ZiV5zA5bk1CnyckxTYVP1wht1GDKyNuzFGSxZ2C6hUv",
  "key9": "4gbAMZKD7uroDTKcGznfLGym9f3NDoKqsRLHE76pm9CBU4ek47VxzbNYo3gG1SoMxqBWg3ZYTQHp2ikyZ3AaVRbU",
  "key10": "afCa4VghpikoFHNfYoAmnXu1pGTMDddrQLjyRxBEUa8xEmRc5Fcs7VFAPuTtTyfQxNm78CUj5QF7V71BsXzBTzg",
  "key11": "4cFxwADNGY91yXeWvbgSEn9vVFWG1BGcGkCZ1i9RoFyxzMhhEYG13bmWDMpWAjJ2pQbrasHRj45o2juFVRynipNf",
  "key12": "2AFsi2SHY3ezoLMQgiPXK8HQQ5twbCzgibkeHcJC6afbYfvVB2CouZB8tbJGPYDvHfLcnVfRxLuecHMiy1fu1EtT",
  "key13": "39DN7kZgT5aAtUAH3c9nsMb51737Z4H9hbrode1JDyDTkjMZ3UsRg5zxwzAZY1FmRpR9RZrZgEpEhEDWktKXprvu",
  "key14": "2HVcA9mh3aoFuf8odZgdeaS951XTp1WXqP7NwozSFsvKfwAwATaSwNa8RiFU6CL8gmtQLUfg4nLKb6YGo9z7qBu8",
  "key15": "3ziMKU6Dryu3DW7BUx6UonnFrD76Y7jgJuRcNnpexC3Bez1GGrJvczvmxknoGjxa8TsGQLWjquUyvbbAWo95jDtJ",
  "key16": "3Wqry4Kso1B8L5Zj52sw5Wbo1KSptParvGrmHiNkpLvHbzshtK7DbGzxzP3VziwjKSJ4CVRptMzrcXdGRc4z9Cem",
  "key17": "2G3dobeD4SqxMvh8XxfcpzJXwUNHys4k3Kq8Bx7aZBH5hnnpgXXuWkhqqPqzSZTQH2p4evLzh1wXAcdQRdsv5TDN",
  "key18": "4oxNrytdkoEjnXmEbkCkvua2LrJU1JXDXBN7AwpkViRMS7a9TYS7URWmtQnQ2XKjNcLRGKazjvPCPkdbzvdY1VGR",
  "key19": "KvMwVYzWUwQW1M6f9FHm2okPqBhwiNMvtBw6DWiruKHrL5zagw3Z1aLjDbMAUAEKDHjhubinAKvSHyffZQFsqNu",
  "key20": "utoBcyc4TyAAm8gvNxngMu3mVNTNq7oc5advX4aRX6k3KNTBTsVcZv61C2zkUpdSiRp3749F8J26ebuygfwRaEa",
  "key21": "vSFpiz9Q4BmGinR7aNBRNfNT6KanewH8ysCD3yejZw3MWkk2YeL6obWxYB6VWGfTWJGFRqbQjQZhS6HABrhBNvv",
  "key22": "4LZyHnYUcv5h3DAoGH6TkQjtuFXpLLvHNYwoCU4rtGForDNPvFDBxFRw1tsCUCsmFP82LhSjceeLYTb9RCAFQsgc",
  "key23": "321FMaXfbPGXF9iGg7NNidLGUm8BAtFaDLPZgryD7ReqHVinUYMmNrPEkLg4GPSUf7hzgNYStPMSQThfbgHGkHb1",
  "key24": "5MHHKChhaNv83T5z1h7Surhi9khFBKCQBGCzkdVSTGy7QYXV4H7U2gBbJpPsn4GuFUGrzeSCsjedwuaZsPYywief",
  "key25": "4u6TKhTt5Hg8tQ1JRU6Hd53Th2xDMYsCH4JxCcQTiyH7wdwrxPintc5sij6VD8cdVzkotgzoyJXmepUByVSaHiQk",
  "key26": "JG9tR1UqLQQag3bWjyH84hCQvDGc5XkhqjSv9FHvQQhJyjKziTZNRys2GUXQudwHcgToiDcFi2pAq57XKqAxoLv",
  "key27": "3ZS9Bq2rkVL5jM498cUrZ7VWGBSTD7u5XV4HvWMuqiJzb6HragvZN8jpTQWeKDVhznUnfNAVyyUdJKsRbpLetUXQ",
  "key28": "4wKnXpLaTaFb2i6yD6FCD9fbnMDFvgiSGHJUh5DhDoA7ANLziRZaGpgr4rgmYA43vULZTiymgu4dYZ1J8117Gtp8",
  "key29": "4SMaidvHbXKxbA1Miw52y8S2WqxpAN4qto8z7PvXKNBCzTNcLvzhNThqfd4Sq5dW6sEbDrcW4PQsF7FXe51mweCn",
  "key30": "3ffoWX5z1w27XZPCrgCSwjQ6TXXES1LmZcXea1eTJUwCsZpW4X3ih8PhtnvBHzmuT9dasYjtNk6WAM7xXLPRmdvU",
  "key31": "4RNPy2rPqP3gvrk4bJfv1CGcurKcEwceEtoyQYHLuYMrjEUyZgjfLhkqMWkJSpdp6Uxp4WzYfvEcyGfAzkv9zj3t",
  "key32": "4gosdrYZfVevxZwwe7MBM6Qj1fVjHD8jzrhxropHbi5FKNH8Aegg6uHHKGfj45uin9jmm1RP19NZ4Wmm49tpnDss",
  "key33": "4r13p5cvVhWnJ2yUV6gUnoTVmA2iCsHSkaNXQURxaU5aUQRWi1Eng1oRPK7dsB9TzVPK8aQpYJwwscsk8qmKuUAC",
  "key34": "4jQrSdmD5jbyDaT1xVhWhv1E7iNNdtzmadcFBpyewLxo27KMLUokBj8QhrN8K2Q4DYe8xk7J4GRavFYdc1sMNR4C",
  "key35": "3BpzmXs9gsPpt5GtxTZfDfi3bc6ACvvgn2enfiAGStEdPN3QfVN1cwnTYCF9rHdKTBjpD8BNGz2LHhhuWDHggoin"
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
