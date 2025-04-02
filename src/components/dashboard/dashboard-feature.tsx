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
    "kD6phrbJYD1bsMZ9nwRWLZ19zUAqLkyw2h35MDrGQBpeBMkUtV4RMx26sVvp4fk2osWcUjdB4Gkw9H7jGz5RiB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyJuURLAGrEGn4bH7UmSvv7pEEvquD4LQ3owGPbZKeZKidV4B8Y2KGPSu4pbaTp2cuX6ZqMYYgbcNdHrb82AtU1",
  "key1": "2mSxGtLoq2sjuJmhqpGwBoVuxUvdQdnB152hQQWu3frNTpbWdMMLZV3dxL7Cm7WMZWHx7iyTyTcPGcEjwfTjBXfG",
  "key2": "58i7ALdEHDcSy4aMKqQrGT4UbjttQAxwKLT11MfHuV4A4b2mVm2CZjNYoxXGzhRWAMbV8h1zAPvkeDQG5KdVd47b",
  "key3": "4zC9xpGspU92hZnyobXAjJ6VGB9qqsi2VpwybtXi1Q38kNEU9Ae58kWAw9jupHWKfpjficvMc43FB4HkbyWrW6Ce",
  "key4": "2QSC8t36zeQLbMMUoAcx1vACsvvafVuWCReko6PvTxdbVWPXcW4YBkyGvE97KyEHyP1DHRQP7EyiSzdL3YdzxP2H",
  "key5": "2Z5PqwjSCvpSmbgCXwQqpfigcb3Bcxz56XyL8NsPeQMDcSPBVXf1FfDE524df47yn7wwdGNqGiKoApUSsysxaCsa",
  "key6": "29AHGSy1pEaXJAANMPxJbUSY7jpXviqQSaRc9UNPUjGku6gRbcE3Se15Aj8x3aNntdYYrMr5NYM4Wshr5Me18FEk",
  "key7": "2Akmj4EcT5DqFoud8XCv6vUbdVchkfWfya8stmFDqFxKp7pVM4BTk2JwM3wYj8NmN7zARFAY3gmE1uTDHw185Cwq",
  "key8": "5tEQJpWTK3tgG586ZNYhWwnNgjQUdciDa3VkCJAAAB2V5hdxfmzXPgQ6cb4FodRrr5ptbs55WfB66QFhpw16PY8R",
  "key9": "4nzvfvroxZ2whvJXcvkwQR5NRdM7HSF8RGCukT87FVzc36kwMbNhqtiUkMTAZzxhShQkadu9szDcYNuMWEoSkaNV",
  "key10": "3bp9v6c7uDfFux6KRVieGabjx6jEWoQad4LSuvs7yPLHUhrJUFrKoVZyaPh7e9PCu7ezCTMeu6fv9cbZ4JW1fY3i",
  "key11": "5MMKL4n6RydtmFJEQ6bJHHQZmRZ34xdSpjjwTYfAaGA7tjRTGzb7wpQyN9SUzbnEJLdbdmbN3WftaZtAAcnrRHj8",
  "key12": "vDWdQGQNbDnuzEeSDP7QrNBPDdqRM8Ad6sm2R8H1bejng4ED2AZqoHeyQLHm7bydx5JxP8UdZouwzfCZwur6F9g",
  "key13": "2rSAqpTWVCFTTjLX17uP1j5LM9QxNdm8y5JTTsSLra8scidxvxzHWDSbcWdiez92rKH2gjEedokDoaBwTWuZLuHX",
  "key14": "3xTA7wb66bfHtuPFFpdZa2x5aTKxcPKCuKc33LjPnzGtNzjmpjiCc9xZTZapBGFb1QBbqkgpNu1Pdqy2XU1ayVaf",
  "key15": "4hgeWxCuqrz3yFhhPCqnfNc35gbhdCdABurAoYiQZ4VGRV2C5C31TfbcUAgvQGuB6Vkzovmn7poXv5bQUpDynaeJ",
  "key16": "65VAgxsyuzkksbKXjceg4KLMPpuJS8ctbCGMuQW2KSmtUAKAbjxhug9fERDuKkaruUV16wQS1xsd5e7GMfSUwwVi",
  "key17": "58B5sfgMQ35MF5XTZRUKfjqDrARF5KSM1Q6k3UzTvimYq27Fx1Uea2x9H8chov4wtcGdZNYLEmxa1ML55xipzfys",
  "key18": "nNrHGb6CZUJdFh5PBjWa4ABpCGqiBBDE7WV26HkGzEF966DMDdonAk4o49B9T8ZDhtWh5H4dbq7YV2vJDeuTmMU",
  "key19": "yMDu7XAUE1bem6HsoGBSu6sPVkFfREFQk5VLSvdkzSjqeJ9XaE2Dts6hwqLvsQTEkPu2XDeFpG5wX52FgjoZeDW",
  "key20": "5vkZQMvms1tU2JF5djq11dgXfAuBZ5TFSXLHVeri59jSYoRG5aqYoaEvyf8GEBwnViv7tBezBv4Wvbi2aotq3xFk",
  "key21": "458YF2BdmrmfxMGDkWZQGuSeg22egUxqva24GbYzJnYTCFXQjqqjr4ReG9L1dKfA7bF6CbgWSUTVwFcNTimyJbnb",
  "key22": "3pNRqpRcZ7DpD3jMNc2JKCVRRNEs88Dyw1LNk8KaeRiVzgSnRtaAh6ReVGwPHuVwHWAqcEsYy6FxgrZE8Cn3VF8x",
  "key23": "3YVtAb8proBiUafVttP2LguwDcZvSrQACYNmwAk87WxLnbDnrcYLF7YKtco8TBRNewgCY1vYyVqz9g5awMUruViD",
  "key24": "2tYjyPhYdA76DQW7otqCAtCCLGnxxpe1WL7DTtJmvtT7xYKbhDD5qQmALB6jxm8wqT8oaLbxtPdFqZa64wfDKEox",
  "key25": "2MqqzfAVDdRDkxM1BkyL6skUVxGHV9KvyQg7GXP4ERRK2ffAbcenrLehDr8dX7Csou2R5P9Y6JdKt41TRKHtxTbR",
  "key26": "5UALMLqzQiiLJxvnmBHtef9aeeVzETy6ByiftcyyJvT2gunQeWtiSourXNWzfS8FGk8yCPps6etiZCXE9Mz2EmDh",
  "key27": "4HibRTaEcDZURAtaoDgTyxnDECb7gfLtzesp5Ft9Nft6bCDRBbynjK3RVxBf5jMr1PBvVtxygDN2otvzMtcZ2Fj9",
  "key28": "4oBG8sAXN75bfJ7aC4GC6GLZjKCP4cEfpF5WAe5qQVoT7NNa4mkzij4euVTfG4cBkthm9N9d3HtBKnTF2iDdc3qS",
  "key29": "3FxMV6gUs7hUYnoaDy5iVPY2pnhDvGtbz3wG7HKTffcWDQLdCDeSKLwQ1pZErVyFyZYeNaKUn6Zk8gU8EiDhATpc",
  "key30": "32kM6g1beHqy9Fz2Uw4EMMH6t9Yqkx2J8HbMRaCFkSTNmMe3ptTmASfAhhgWhSy5oFKGqqJvXdFHdEjp7FvbLGZS",
  "key31": "kYrMkK7oamq2VSrhcVFR8MP4FvY7uzK4bToypJktZHC19kUqZCTp24RrbmoQCHB3SdK5yZH8wNzh5vCFjFkFVHg",
  "key32": "3dyHSW5eZz94GXoi2Kw9RCqiQcU1LDj3g8mxPETT8vUqCAULgjaYdCgsiztVUJ6DWgpLvXxSLHvUmWECVJkfV9EQ",
  "key33": "2ucPEf9goSSYgK5tyDgpXcjxYWP2yteUUdEYHRUcwptoXNBFosjAXunmNqzctoWRr3HtoPfhByZorASMfh3ju2Yk",
  "key34": "3f3QVbZ1gNeh9xVufeX8dCg4FELB4a7BxHaBAFKX8uD4iysNVRXBBNnWrykVkqJSUPJvSV87b9CnVgJykCGidQDi",
  "key35": "5Ascn83aatxnusQCC4AoqPZ1kuCRmEEMFGHAKHLgro8Q6TgZquMfohdFfV2nUtwsBHKep6s3MQA4Lq6CpSrCxvHp",
  "key36": "qMjvT9WUiZtnnci1nPbym2HGPZf7crtBqkUQUALhFt1CJcCDxtHXj734iQd81A7HrzJGiEU2gPk1gZge1bkayRe",
  "key37": "3TkHpjuRBMHQ273Xq1bn1NAD7Ub4ksAwFDxCKzW4DktwQy7NAFmoi63f15NZQmnNTYSU2fThKfdTnsfqAA954whR",
  "key38": "B8uLzxH29VBFN5ajZ5SXiDUaEosZxx8Cb2JpForaaWo7rTyPua7GiamJLHekbAFSheMT9mLCj3gLV4PM3mjs3bK",
  "key39": "2RSbTcQy2ZJHihy4L5xksZVwh1eRKsLsKSmrAHtTiu9NwuiYvg86zuNDwKZkZWborUFMQYZBx4N5Z2mPhHDFTPrv",
  "key40": "5STkTdpfcE4Huj9CpnpVCHksLtKYGs5EXX4G8C6pA2bicJ2tT1gpDRquXvzDmVFe92aKT8FMod1ny1zSPps3ctgU",
  "key41": "3UeRS6rpYjZA9XdYidpKh8Dv154At5LxnCXKwGMk23Mhee9KiGHgVgcUKhBs5duACq5c8C3hcupdyuoPPcx3tAnT",
  "key42": "3SyozzBw4Dzswtmy5Uf1QjWbH2XoxN11vCRemLQoWqZtozYSSHugT1nV4VAoASMHAuV6bhqS5Ps1NPn64vsmXdCJ",
  "key43": "67ZEwXNsUZDgx66dXJwRN1QLKkpDvh1iYtpPjVaVZE5Q5TUH3d8eiS1wkASLn9ZE9TL2bh7D4nHaRrQqF4116BoM",
  "key44": "5GBjKnPiFwHWQ2Aw1gWqbpWEAr8zECL5HwVhbXfGa3XmD4afjz5cUtNE22riYTSrimnQ8K8aPpBhCqivFksJjEhC",
  "key45": "AkhX2pEuSGvZJNSk85Rf24J4iYULNGnV5xxujXJzvxCexGJtyNYpCv3uzGj97JR7DZADi4XraPoYCBY9ybNphCj",
  "key46": "4H57gZbj1yKcRD7q6qMX86EqoGrrMo98Xk2cFX9uhCE1i9hmtmGkwdKQiKokFTP3Pbr9tZ91dMXDyZKH1PQhKa4e"
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
