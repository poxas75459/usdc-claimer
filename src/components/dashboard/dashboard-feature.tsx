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
    "5TKjzsYc4X5YHvja48fN7qnjjWPu5ki8ADvqQR74ssDdmCn8zFsr5zQxAgd79yGci4D82yjeJbvBSJXxdD7ubRHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PMNdCgfjCV4K9fsmqjS1uzdZshmYZMNR9gnahYBY6J83dCMPPMYGPV7PbJEVLCPzQmdMaVWzuGyM7xw3u32Nh3",
  "key1": "5ZsyBj1KXTEddenaWoE3YbyhfzZpBWsB866b8myxBZvKkpQ6rYHKidEe875ZApNwNzUoSe7aX65nAJENVpLbdDGW",
  "key2": "frzo9fZnLEza1YQhKX8pyGomL8TKmGctZFnhC7vjyb1bQR9HW7eVvSeXLR4wFUrnDFf6Ka5DLhVo4yVjbyehPVn",
  "key3": "2fHahoMy5eyXayhFYhJCNhQrwvCjizoKBaeMAHZxJboAz2CN9MbXkHFuYS7tVnLXiKWGK6QcMPHuS369U2iLSPg8",
  "key4": "2Uqfxrpu1BAVEEaeQFAYNqyqoVfhcZNvHhhcu6UNsRZD1AJYRx19PTQscjhjzugUtY2aDBUtPJsi7FNdU48MM2Gc",
  "key5": "3LpXtF7mN5nkdPjEA8Epa7pAqVMUKd58tGQH2beeDBrSb18wem6dQDXXBx9UUKMpF54vqZSiUiNdsk7ALw9aE5CP",
  "key6": "2uP6hmgCxjoGE5AAFgRKwmCK46P4X64EeRg3F5KkG1XDHDt2KFk6qxbtRMquxH8Yoij7Cdfryc6xBJFh6UXdWrKK",
  "key7": "2TCQrixP5T6pj4HXXaYCiNUhbyc3zRw54doVXyqjApNPmTG4hnnLuwb2kGXA1D4fHBG7Z3jyLeeXiAMGqq7HmuVe",
  "key8": "4UFwEbGoWES3qCkTR9ji4q3Lx1nRbda3AwdytHD5MptKUhxjtozorvVnAGZJrB21GRu3AFYN67iiusMsBGCWGEZR",
  "key9": "3qPDETLyMH5XKzkgJm7iFSMKdNKnqQ5xdwiUVtuEYbiL8RZTVgpMtkCCEpM1fr9VNQGHLkmzJNp8PzLx3ymGHyoJ",
  "key10": "3ia5YLZDkUHo4t3uwib7urfBst353uxoCPXKWkuRxGW8Gvhfgb5MNAobWXe6BEby2J7YVAc222eVrz44Q6srZBV3",
  "key11": "26UjDocCGNHARqk33qnKarQgwqwqVzE4EW62FkxzaTACfJCzaen2MqNdQ76EXAtsX99u4XE2zYBibQj33XeBbQ46",
  "key12": "5HLfrj3xqZsCAZXMDktFkbuTVHfwhSg6Y3Lkmsetq31RmTN22UQjSSJ497e3LjAYci1tiDtKwXQ7ebqCigtCoURj",
  "key13": "2vLu488z1vnMUKVacjZyNF4PovR8tkjtjxqt6kzhJWbV5k7dtJTVXVCDcPTtUDv1yFdnz8z8R1Xk2zf4B5Ci7W8k",
  "key14": "3LV5KtjCA5oydu9Z4xqMMFmJAwC34JmYcmKXCJPcxvzQCGLBGWnMYh7WQ3w8UEjqA9AdKorL4T2J9dHM6RAwXPCo",
  "key15": "5zXx5NmLs1w1r7W7uE3pWTxxj7s8S2PwdWE8HeT8mFKemnax8UFnPyH5CrDg7eKYPXXNzZqwWTmBLYyEDUbxWttb",
  "key16": "BjwJhZYf7kKrgHhYSQVcqkUxxeywpFcqNihUJeHdNwhYSUVB7U5bbHR4fY1LaDNCxFw8sKnNsWJSHVW5xW3pWP1",
  "key17": "xEp1DYhSnE1CSd3KEnKZ45SZQozimCxUL5TU94godHxTvbGR9TBGQCkFvTzqgBpvhgCwXxMGEbp1ZGz1sRMDZjo",
  "key18": "4p9HTKUDLJybQcnaFCXA9ZxZD3NTPS4nyctw9AXAeWoN6kp7tkoqo2fADHhXNqgWwpmWtt6SfFP6LKGPjugNFwiV",
  "key19": "NZqjcxCuV3DLgc53yuSoKXNZtnZX97Q2DwM4KZwZg5MVZbyx4ug6EXX4uq1kPC9kqZ9563cG19BDvzTSdvgXw7w",
  "key20": "5UkNmpo6D6WiCcKDaN6BsnEt77NxqkacJmaGM6aTXzRThjPptPhoGNKa6UihHjvEPL1X5d2kUseoiAzk1Lr68gAA",
  "key21": "3wvg3rE4Jw4NBSqmSB6k9oddDw6iDK2ECeuxazF42q3M7EKXY15SYqHz1GRNd3dbbfvx8XPRjB32vnVfMxBbF6aM",
  "key22": "2XGcCkhCMtbmtNdpM5ekoV2cUs1f2JdB5UptQuQXZ6bCMiSSRYoVTSVJ5a89FQhjb5aaVmNoHUARkV2uwrgMBxrz",
  "key23": "4jfsviE4Fs8hjYvrHodrHTjUqcm5xysKwCw1yYzN9z4WUpSKaDfcqAZGb9doERp5Td33GdNcGgHyg5j55RDQRzQW",
  "key24": "2FmWPVqR7DKG1hHsfg79BkF3mx2kxMJTdkuFzGdiAfNiJQY7KHPmnL9woYCH9Tnz9HMdb3AEir714UyqrzgoBrMD",
  "key25": "448oPJUmLsjPsXWYW39kunFYDENXm8gDM9GogMQzBHcGqcTz8uV4YA1ei1VK6zFZ8xkpqKRHfodWWnB5hEGvmaUZ",
  "key26": "4ZifUGAoErfnpoP7YMEU5mbT5NJKFP2biD9QpjcgFH3R48GLWGAF51xKzX91nWaPmc6nLwe3DrZJZ3KPxx5xV1aj",
  "key27": "5p4JGFXte6f7qvsfrFtHMzqZEuDzo2SMXYdq2v96RmuVDnQSjPPTDQ8vQHMK2ihxLekJK6zLRMH8mrtPXnZhMeFB",
  "key28": "5VpJNti7haCkUg6aECR3BUCMewDaVCvrWQA9v72rkD5o7y91mEYALLWTdtNSivyw72L7k4GV1apisGdKhj5o6GzL",
  "key29": "66DoJpBxGCmd6BuV2nTjoh4zfJgpjGSgH14Qqi9gpvSinFW2FqUKbd9xkP34VpYs12ddvmDHZdLpU2eP6DfVLeqp",
  "key30": "3C7xA4CCQ9KByyxhHoYEWGuDm1uEiSHMxKasAFoHBxZ2UpfCPpwCkjviVEUNARUyj4VKoW6KfRsVkqkFiYRcKKVJ",
  "key31": "EDBmVqR3fJKg9rKnGywthDoy1yYGBzdFLHd1oMXEV5HucTroCdNKEXXiXsrNLJbqJArPo9ZumcJfQrUT9HatQoK",
  "key32": "3SZrBd28BPrjxBHim8zrAWhNv8z3sG2Gc9vARM4MS6nF7upUSA8PX46TiA5RWjrvkHBz3PYF9dQW6Bvd8ki7Z7t",
  "key33": "344VTMPEu6oqbEgeNgwhEPCXTWhmXwwkajTNFwNnYT9cFtTi1db7ra3WVzDfn9iQym6iiJUtaa27kBbgrSyaDKct",
  "key34": "qaqzQPg9RZ5uJtDHPKAa1g7K8UpmwVeWgp6oiMUfMHUf1DsRjyXMJDS6DTwj6b9Vy6yHkBECHsZVpJMRU3Kpeuk",
  "key35": "4szKD8yE5hkte9JZ45FBi3xBgZZdRYQV2Nr3Kk2U3PTQzFQvxVB2BWjcJjChp8zJsL7xdLt3zj5pRrjxZDwPTEZL",
  "key36": "2odxARL494eDnq1BpSwmvCAC67e7x2VtMM4ojxWKpKJwLPTuCRAX6sWjdSHeaqqy58jr8Q6bwCkti8JoVk6MzPZ1",
  "key37": "4Cv5ZgTnVTQBkg252Mk6GCRU52pTzDNgsaw9i43KrAuiocP1NwXoyWNBHwDDZH5X7cS2Z2SReAcBtiSTytT9qZEJ",
  "key38": "4ebJpoZrtzjdagb2yBgGVMUnv9FDngR1oEeD5B3my797RJ4thS2Q1qdhjCV1KEFXpHSwUuQx457pyszfyDrFcdz3",
  "key39": "5ZVHnPh5UAeFqj6iD2sBYuh1aUfenAkSgiaVoVLoz1DuRvR9wzQykSEe77YujDHy6KsGsoi5ZUMFf36eRzbP2vth",
  "key40": "3bmniAaZjyz5pxcXZ8PBgy2rmwedHz73aUn114JNaVTEpKqNRA3BnUy4S5TQ6qt9gBnoievsrMEshihCZ4H51dpY",
  "key41": "58NHqZp8kVduv8bgRQ4NYuwZpQii9JdkxPSduWf2xYodU8LPaDW454K8rTfmrujWjg2PWyG4X9ewzK12rBbm5mfc",
  "key42": "5drUPvTtW4FrpszQ495EtYt5xhqYzBtPSftUnmXe8ZohaJCQATSWxsqXi4NN6EYafaDfAPir1zAfCcZSsy1MCqqa",
  "key43": "2ZZFUUFoXJoYKJvYY318bCJSQT9vz4biLy361b6G1E9Hd3Yukq56bf2CEBsUaeUWs9VCizJsFhkY39wmYYiADsrs",
  "key44": "iD2JKk4nsDvLsgtNXYdrbK45bt3A7Uud5WewEKbGM3R3V26HFwVsnfSKJYxx8nsASstyDcQ4Uqp8kk6jdXdb3wg"
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
