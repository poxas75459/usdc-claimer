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
    "4rer5DC2VJYdf4PSQ7VG1VppGzrjAXCuL4782Eu5Ht6LEFAPcTnh1Yis28eaSduHNTjusPbTrxbDxWB7DdphYiye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tj9KaC1E97kvDHo96J2hVoNBNxdMZx3445pk6mcrEjPinSXvjvwgPFKvrqhu7cwosrEpHmzYMfKZKKAUEKaWwwf",
  "key1": "4Pvfheu5RPvTqsHkr4Bm3SUPBasA73t4xNpQ9CrV6aGRfYCHASTJNqzd1sJTLr66z2TnZKz3UyM5htkswZmArkdA",
  "key2": "4H9QegeY4QyhmL9aV2kGQRCuBMTZRGDbx9XgzLdc1NrExF1hwp5xznj549ns23sk2qVdXaufTABDb8Vg28GWG2YB",
  "key3": "3mieofP1XWzm8kfBdB9jAaTBUTfZJwJUk3t16MuqLcFebZh9jjzTfEoPkPUdgq48MyoK5vgcdajZb6A3ssQor2uY",
  "key4": "4kVWG7rs4756hsNYDFeNVMk7PhLdkiY8nCSDECtJNBf5vZMCxpuD3d215WZxdDuwW8TXxq57tNCJ3eRXN6bxUkfy",
  "key5": "259N3uTC1FLEB5uLwn8stxMEsQY2KwYSJH5TpVbAJmpwVRELnPStnofJ9rRSW5zaedf9GfUFyER3dxaPPeVmSkNh",
  "key6": "61R2N1jaWVxd28NEHH3WHdv4gYfeNkzWe44EmJAdBB2eDeyN73ri1Chd4c5pkJnxhHgsWfs5ZadgsMxNz1iJ9pgF",
  "key7": "5eLhfYcb8FP6XjCxU8pikbXrUzuAfeRxJAyN9KyaueFr7Z6dReXBZpHyvhfyhkWcer7Vgwpz291MpwVwnitiVMD7",
  "key8": "3rwNQ7pjoGLEm8cxq7zyxXJJxcwvgJufjHeg944cDcaUgLniGxokhHqtpZqpbm43V5vbcahVRRtxmSPDNRNaGHoy",
  "key9": "4HSQ8miqjGXr7cwMECsCJyeJkaR3x5MmZS6BZSfQeq7Ezo6byzy7w1pivZ24VFK9Zok18Av7e1rjN625r19AtHjC",
  "key10": "4oxUnkg46mgPXY9wmcj5nEA5U6USt4L39Lx9dRSAMYNKHmj8YoEdZ9tAU5Za279Xft4Bu8Thx2K1fHkXVYKiEX4d",
  "key11": "3fig5WtKGknXCo5oY8D1wYVqxmJg1qWYchxYREWf7qJVpuE4vFnJ7ojuyLba9wmTZY7pzPecC4rH62cKqJybvoA",
  "key12": "4PhVC43B1Ap8SAteWKzxwXuBWd9gpNurH2zH43N7FmEMTGGPM4rAsV7ZaSTdzdrNBk4zC6B7pMB3vvgxUCQuW1po",
  "key13": "5Wd32UpwFit9RcbmxebLTYEUJhCvEgHzPLoNZVpFNSwQBBoJHk1FzfdMPzfURrpk1dXXB6n6mmY7Zp6LR9DVZckx",
  "key14": "66skQNd3M7xNBscPzKFDJvD5P86yK3gyjCnX7RLqdh2Y1NjRPuY4j4qdQZWVmJHEfmAGcdGfBJjtP7KWf6jPkHL7",
  "key15": "65D8VSXaAK8PhMTDRs4fMqQNn1zcLtU23Gx5fSSccrupjycsh7QusuZdyGUqk9eF1GDsfFbZ59bg8sk3t7wvoyEi",
  "key16": "5qikuP99EcV5Koe5Cc6HFswdmA4xr4zKtTAruZZVsbxduVnvp4duJWGmHhFYgddpr9s8UabaTcKDJBHmWrDqHWs7",
  "key17": "4G4q6YLM4pdrAP7gXToDyqLmxD8iyGwSGK4SUzYzFiWqFHaGi7JHXVt5jjWtehDsM2yDe8oz4D96rE8Znp3Jm2Mb",
  "key18": "5BZXuvgSSFAUsAgehx7wFQiFMapJjXN15mtnBh1FXD5jkQZ32YGRE627Y9HehuG3mEEngfqQQKXkE7pwTdwvidrc",
  "key19": "4q1y76ANFoupiKDEN2wD6Lts8nJTFzAUAYDRndBhwb2PVzbSBCHuh3cP6aFiwTk6gAgcteecrG8z2MDTtxmDZWRN",
  "key20": "4NPZePGgWuKhzsizhSf1zQVYHFkVgWeXzLTq6P2eBg5qdr1gcjEnNybPngxLnCE3VgoCnk4hi2Q9uyRB7XPQA1Li",
  "key21": "agxA35jtjpH28MeizfbNssTgm5t21eiPU8nwVdNUcBZkuuv5TcHRZmPYAFQ755xLcXGoABP9CoVizeMdXbv3M9v",
  "key22": "5Y19um3iSLJ3YByThymhim2V6C28ax76tJchtuzQRdBhRiF68LZZtv8vr1CJ6MNkZ62eXQdJTaCbgJArTbnYHF6i",
  "key23": "5ouQNKRFWmed6CjXeAYTPCpTaGGE3wZVy8yHoy5Vrg3tEZKHja1b8my9fEbWjntKrriinxrUdHYNuX7g5E8R57m8",
  "key24": "3YzgWAqYDiLZzDNYetugpaK9mLSvZRZu3uFFGbMPFNmKhdD4vooSbmv9QPdvMqeDSWQGxcxA7rnwNZUSZcQXMGQh",
  "key25": "2LRoSny1VU2YCmBE9YxDJbv9poxXMBnohbn2v5nT2mdefbA1EvQfVfb9tvr29LTFXzQjSWkqEXP41cV1aCDCMTSb",
  "key26": "2VjmYYRrgH5xHP6huDFjrNDhKwvhzvqzKmMSVj85i7UYSbhmSpWBqMQ4qgyHCkskGu3W4qNHJV9wQMpU7cs3Nc8U",
  "key27": "26g7jwEWqs2nMo5TcSgPLjmrfxQTmV7NKz3jK1gzNoFRKio1LACgQPMq8m4fCDSjaejGGRViVdGMSCMxu7L8kDHb",
  "key28": "5pmLXC3eScDwn9x5U4F2hqZWezYMwNsE9N4RujeagLx9rFkyfyHe1fTniGDDMRnMHxWPWEDWHe7L8wYjqhShNHwh",
  "key29": "38zvvr5gkvMCTj2PsfSQCcT8TifZ6EoBnUnkgfRv658eQqcSykJp94KKnundr653QS4HPMzr4baYD6uYkjUtXzR2",
  "key30": "49cLrrRuh1anM6EqwF1MN9gKoSYSrMj6TFQd4LcXogo1Q554wwZgHDxsoyQP7Fhk7iAyCPK3XWneuvGC5xoiMej2",
  "key31": "5xVuq8scGahcS5KjYSAn6jSZoHXRgSfXgw3S1vehEjQfu3irAeojfFEujBpaT4k3MHVcYtF4KcHGCR4N36pCGFMg",
  "key32": "PgMqvyFjNy9cTyDJLGbHhXnCeETnAa5DNmzhqNxng9dGQTBMs1A1pzUd6yyViaRfUyPeXer6NLc3Z18s6yqrVRP",
  "key33": "51sNMvFSwcvdQbDQej79fRyV19yviBUWGWBGvWso9t4sjUWRHSvSogyQpnjoWfrus3WPKzQw4sZo3j8cpDUTXDVd",
  "key34": "fBa6zsTorvqHaVnp1XozjGpNYVNM8j8NLkytQDVnJWnsb5TPxtYY83BEb2rmK6Cz8oqwdSzzNdwNKCXENgLsjVu",
  "key35": "3QtgGwZGfu5C4fN2hUA2MZjK3HGh6iCdtq591QaeT7jN4xLdwAR3EtubDMVpJbHM1M2Z5Bz7ScvhJhC4yvPWWW2t",
  "key36": "2UGmzyuwovqS8GV3F8Lo7sKDMk4NEFdVZ33f4pSX1A8ZtA2X6BNfsZmGrfeCFt611LhHeDe2mRaLK6sgdCn6eeA5",
  "key37": "4jCtwVB8So7AYT5kfokMQEDa4ut77cUWeUYBDKGRdPDYPRrv87UJr8dah9CwmdSgfzX3i4zfs8z3KmJhcRuPwt3z",
  "key38": "4679d4WDpo9A3JznSS8ppc5CRiyje52tcHU4tQC63HHH8a6J2Qwp2ggEKEunAXajnhmySC7gCw7LVubpxHNesCte",
  "key39": "kx5Cm3HciDu9jcPZu6147FDHUAC7FHSzQvNhukzaK8d3PFVi6dg9PKfhgEvQAmZAonXb6rDutFJpFgXNwkuzNb2",
  "key40": "4SBNDTx6pwoxwPW9s9zcUd24zWziUKVaG4hHczCwxtnJtzZgDJ8SEMNAeHFqn7EzKNN462f4Pw1arVHC27t3a1gv",
  "key41": "3HQPDwMZvcw7ibfKoALMfKt5bXG1BeVepxyAnGvggDrKUtnhQ2RBUij6diHyqaHwNS1QfDXVVKCXg5ncuzyW1osi",
  "key42": "4JBfaHmUcn3vkQ1e5YcTED2CtvB3vHfsfEWRiHjGSrDrkEUnQQLKA2pxLXHWdMKK9arfgRisretENQkP2bLAAdmA",
  "key43": "stdPwxKqFbigBJUhYZ68QDRozCq72QCzCLejGaAzcdtV5umjH3Lxrx6E5KvXSDasLVkcxhoAcYQQjeCpWNAekyz",
  "key44": "2YqBJmRFRcyngBAjTGmhTgCP5vZzYwTLEUwdmuChEu4mLneNMCjAvXvRYKz3Zpbw5hUAJnfgigMNhboYe7DbdzcZ",
  "key45": "5GguPwzXgYGSP3vQpbtU2x79yz2bMZt6siUwfyERhVvBnjf1Tmi2MQCey9zFUuovgNYa4iXjcozhbXGtvnL61Zk2",
  "key46": "42eHXa8CpxQWtKXE7kk5P869E5rceZ1emKFy5gPWzxe9LyTP4DXJydUqKj9DmdPy3jmqtopt3dD3SyU6dsQykwvy",
  "key47": "2dT1VJMGF2qWcfC1uprn2aeioxASoZg8jZF8PC6C4GSgjm9CAPvFHbLMAHyAnnDQENgtWVDwj4s5ucr94FmHraim"
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
