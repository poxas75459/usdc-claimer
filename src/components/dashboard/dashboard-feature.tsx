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
    "2Nh2rPzX2pNcjXoyQ8c1ocFGupko3iTDQkjHAMHB2Sbj2aRfvhkT4K6bssMCyjeUf2UTDvxkQd5jRCAt99DgttEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SnCvCHVW88LrRhm6Kodpyy43zXjhoCfFoY2BRjnnFYL4go812BgFdFgq6kRkB8W8WYU9VQBGyXtV9f6RdoHvbCv",
  "key1": "4AMCkzY1SAQTMDu4eSXpVAeFpKNNR8vxdMM7qhsiD4fkBTYU7fjBng8HPH2W6BdHTehWzVzmCByLkrxg2St5Uaz7",
  "key2": "2UFXdMm8bCgs8QXp5wMDLZAffUbi2NSm5J2qvJtVhtv7VDZSjq7bdBsYMChS4Jw3SG1BnS5YTH3cLHTuAMMStmuy",
  "key3": "2RqjGBWBYYjtbvAVr1d1J4wwd2RWFGrjQmHLeS4FBVdBQ3kMUnXJW6ZjSxK6MVcZN2GKLfknf1W3ufoTUbXubbBE",
  "key4": "5pQzXrjeBokPSsd3VQzQ9FBFNKnpneaWS45hCLNy2dqwUo63cPkNE9NRUspyXXgd9K6jt1JfeweQq54WQaBrQqtJ",
  "key5": "4qQkUWpWeeucdQp9K5ha25uXbMm6BX7eA18Kbpdy9UKGBedJptTiMn73TB3LnY9p8qsvRexyWa1jw3Eize71Vay",
  "key6": "3V8CANoxRrs7yw7aVoj6eRszKTtraiE8KotuC2EyK6YxjRtyjAhpU8LgG6XuATegH1Fi6EPYQGQEqdu6nV9tt5QT",
  "key7": "cTRN9gYyQa9tBn6b5wufu1cQTbhFppnfuKk35SGAkXDzStVJoQrMpUJwcf1t8raHmprUpHuGm5a44DdWjR7cruo",
  "key8": "4RNZtq8i6P51V6KxNB38QraL9zDfKhQMLaF3SvMt5r54zV4h2BHo23CZttDK8du9PjznYdPCgxpZLgVDu37cgRX7",
  "key9": "41o4arS9JXpARYqzriYi4vfKrR3xdTgVN4xUUuzjTmMjKBNXpAUsGjSpe4dE4C6SCwhreeXQHX7hj6LPdsRxybzf",
  "key10": "2WNtjeP4GASkibLqUjDonoDhi915fKkpi2kvSkqxRsgeDU2vQTXWDf2frfwrchiLViU862AuYY9doViDr22CMmqo",
  "key11": "3PBF35tGgE6pkovz5uLxVHg3spKNK6dKit1wsZckvrCAb8DWtbRYWmiKpZ3si4ewZtiSryJQcWKSYJccseLjwsok",
  "key12": "3ueDpf8U2XUQMtUXvWYo8RScZGF357TunvcqjGF7BtiZZxzfNPUVArRS9J77WQhFZwj9w6ZLP3XT4gtXUQR4Ly1J",
  "key13": "4bu8wwQvSkGwyLSDRJZZ8KctUBYyporhNokYiG1r3p3XFVeMq1ennSYX8qHD9iBmBqWRmWtH1T83jGULZSdscgTA",
  "key14": "5K1BN68dNDYBUm3VCJV6Bmaj5offTzebNvZyhCHvb4aJnjLEnQCyynHawg59sPrDG1Q9TRudjdLND2iGiNz1AeJs",
  "key15": "2k8SNcd5bZpnPLTkZB8Mn1oreNoxAG2rpNspg3jk3FNjWEHWhWrcc7qciTJF3WwNTZNHV58zpERsu8pNioEjvrTm",
  "key16": "4LFJrwBgYypWoxpnHCioqWdmU2vtQM6MMu7HDcHsEAoPF9MtX2hX8nvC73CsRxgmb1vBsPVR3kf5j9KkdH5Yfm5i",
  "key17": "2uk9m63WoTx4asSy3QKNup95uWKo7y845FgdnP7ng7h6parQCTaQ9Jns1orZoqV6PgUM2Fbp23h2Hev7mFPbMXDD",
  "key18": "66fF61Pcqrt1JSXvrsyTokj54oAnGSByhhSnWLhcGwiKzK3wfEQNAdrB5DACD3An36oQXuQR28GxiMzsK2EZsVYZ",
  "key19": "4fgDhKQL6kogXeStqADTvGHmedSrkSHgoz9R4Gyr9GuguC9tDWXaxjQVrS4GueKRchDibbWyoA5PAa2JjPqwtKcA",
  "key20": "3HExLeFK1nHZCGM1Jci6ovbv6GMrjbonWGFaXsaGsehZ3cPmxtAvDP8jwzpn68eqVeSxKXGf3tXRfX5JdymWYo6U",
  "key21": "5JBr7M3g7mn26ABt6eNRK6NKJHCnP7cMjAwbVnHzShDsB5kQDQLp373ZTx1m9kbnBg9h5mA3xB1szPRf6aNcYqRj",
  "key22": "4CBcUgVJzxyd8m15J9s3r1YhxchjSk4W6QzEqkCtQtHHQRYrYrDxzukC58BtacHCuG4vhvitgwhV9VWULScmxR7",
  "key23": "3kUK7jVqfgmqQNV6vv9JhMHFCy3BuaVidwjZgUSmArTFg5s6PhR8KE2xp4XTEiz8cySprYx5DLAuuQYZRdnDoF1d",
  "key24": "2F35TKzabsFinYeCTkNm6CqVKECAQuBRBh2DyR6VzBNWqzio7g4u3YLcqK1yJgXb2ZYByXZbfpYdCXyxDd6j5EGz",
  "key25": "5iDAYisGPXYQ848B1xGYUHxCTmm6WFNZ1w99tGatkrKoc3hD1WbTYbALwSbPPny6af3KCeUoG9ANnUFJkvZo74ZM",
  "key26": "3L6zb1NJ66HXuokQWB9Q5CjNLTyi6WVZLsjk6FTfpHxMGmg64BbqqB4CJfDeYJ4w5GaCLJsHcB8ZJaNP6Rxmc4r8",
  "key27": "3KAnuQ27yhCZP2USA3tjYg86QqFKRaQieiTivFE8RPsXccv6UjbACrSqqCXB8ZTZhsnG1RV8xwpNz8m6QjARLZsT",
  "key28": "4HBLTt8G16V4abJuejbGqVZ1hJ6fm26MZhe4r2xsXBchK9EqEDSuh3ncfEDDUr9bQ1nc4cJwBRB8eBimqZXyBYCs",
  "key29": "4Tsc1ELCaKNZAGNFUFQAtp3Qr9hd7KVfkLfFVypkkb9zTcSh7ZYf6k77t7G7xdTkxAk1FFLAJsy1wQPNwQMoeMAA",
  "key30": "TrCtW5Vbsw47bwYdzMkyv92vBP6evm8VS91YVbQbDauL5uHcsZJKasktXCLxDR7AR2geh4UVYqsC7XNuw4Jew25",
  "key31": "2WSuuH2TVhe51oPtPJpASswH6vvJP6fUFP3EZvm3UCJjgy5kAcZM6BbRJMAo2ffRT54g1W4dRJbZetDqnxW6hWjj",
  "key32": "mny6NYNcBJAoF36yRU1dMJESzB4TWq4XRDgWxZAuXMmv9VJtKgn5DDsTddAFk4wHNuuHyNtwBMRuHeBwUeanKWG",
  "key33": "3FHPbBhwTGQYVJzQwELVZWAjerRJs6JFR7kdsdkXGThXRHuWWitMBoEmPhCwvtwHYQLbqyiGQPQqyDYVzhAKsQwH",
  "key34": "5kk8rMZ5qKZBq9HJP6GoT8YmLNiXqH8n4MUjtkDQUhsenjVwfa9H5C7RowkNms3tnKNJZ7RsnHSQ4KeZ3qaZ2w2j",
  "key35": "5qcrRSSMXqUctJMXtPBjtW9oaeQR7kkVAWnNeUVZdsv5ZcmL1BqeBoep8K5fFrHiZxNaqDhj7NdhEAC9i7AqjoeF",
  "key36": "4nu9B2XneHwBitNbtX2WLs5WtiVuVzoXkcLcwoTF1hc7nP8UMPBGYnFoG5G5yxZn8eBqL1QcrNjjC3M5tt85HQDH",
  "key37": "4cYdop7ntYYzF29KpgR4jtQ1QNAceSxGxxvbrPQKvKSpZ3NmRKqntryueAk8UuCGJGkjqf6sgD6A4JUm3qYetheu",
  "key38": "3SJumvgT2NwqE757MFyLZAvZ2moowvWsNWqh3piiT8eLouPc9PtvGiEiEqfmyz9moJQec8xTsQpXe3WtrcnQLDCM",
  "key39": "5mEAS79ZUXHjAkWofzp3Vk3m8Ea9wHKgU2uuuFuLtcjJ1DGHwRHx7RB3zt8S2iDwNZd9aNXEgPCPhveyzaunc2DQ",
  "key40": "9cs9v6t8W7K4uKik6nfErJ8yjN6B5cmXh1czWEAabMmh4mL58NVNLPMfV11c7TjYNMwDV9JGZGVjwSaRtzcZQ6w",
  "key41": "5Z7mMC3wxjF67oA7oqLmLHPTEeD9ZH72nKLtUdRFmHXyKhTTEHYFPR2nD927N8dAn9hsACKaTeqjJiwYKAu2uFue",
  "key42": "4b8te3S7yupZRoG31zfqSD2dag6XMYn7SfZo7GDAHJJV5RHqMtoGn6rvzGYpCrxmdYiuWkszWNXzW7zr8hhiPMEa",
  "key43": "uvvRZEdYAuKdLLoQgwyjRiNFaHCTDWesmSzzCz6AkPo8K1uwNemnD3mCRDqBFcgkB6k4rNGnfZKx1yLtNMirLp1",
  "key44": "4WjCYo1wZhoRaMQEfW8EXbhbqstXTiUR2NnxkXGyPmzRCmCkCS9ebEMucUyqA6VHAP6KVJJSfJpETR98RCnkMF8F"
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
