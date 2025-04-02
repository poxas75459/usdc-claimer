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
    "4PEGubv12fH1AnQbK1zd7s9K9FEx5reHXCZQeLXKBjwzPGGVnVUboFribXAKp8EFpA8FeP1HLMDoC2PnFsy7n92Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7bdkRfFDk1v8f6KdQPKQZp3kHu5ccjVEWhP3zqx5WXZBMU1hwT9KADq4pNjmcmpp8YoMMqsZwdGd4mHaneQCig",
  "key1": "4Z5rg3fyeL5KToHsmiWaVQQtXixTYr5VNMFQgmfe56iiJYcPbuLCeu3dUNkgytntjMpdwHUvnWUYjftW4nXaCeUH",
  "key2": "oPPPDoE8YSj4JwK7nLMR186BRA53zS718g8jKv5Y83JRDHKEVGzrQZPS4gZsMySav3JgJ2Ng9Ym1Eco6PqyxHh9",
  "key3": "4bUxZiHN1orSYz4Qpo3YZZuRWyfTvwXGQE1HX3o4c2VUUG9KQUHsHrjGfBKUzXSzLivqeecG6DAsaSuVjAGnp4ND",
  "key4": "4DbKkkzPHzmkWf7HU6KWw2A29TnG7iWzJ4vWuAQJpAdd2kBwDLv6JC2DSobH3bWxWSyRRZrSoddrr4jzW3KFuxMQ",
  "key5": "T42bXJb2pX3tEEAbqQ88d7eordgXv1BfxJH2xuM96Y8XeXBTAnPwb33gXFNpkBdQPPqtXFUV8fjRehohpD9RttX",
  "key6": "zfmTmEHNxotuoCUcLQXNMGp2h1zUJpC3hK4mV7sg9TGD8h7rNxZ9qe1aKQjvyLXvRYPeZGSdjz2GFxKKpeEgeXi",
  "key7": "581z3EsjtCtzjWeEVGYmvrVhe5hXb6FxvtY6r3DjouJyGGdMGEWQY94fvYqEWVYXCsew8ytecgJqDxhWifnKZ18u",
  "key8": "3NUZ6aHXzFYE1pZuLbaYafB4HrUwwjZRSm8Ze2tHUxb8h8YE1jCcKoviHzLaMuM44nZwJRgYVGkaQQ3ugBR7b9rC",
  "key9": "4SMQ5vAZkZFxu6upY1EuK3f5iWTH6oFFgxYzgFj7RbgkdysuSDM4uAw4PsS8Prj55kCWWESpC387pjU5oaZ9rr2Q",
  "key10": "4Nyz8sVFC6caLQwAMaLWdNSBibgd2JCZpG2MDK96FgqN5BKBzjy52VdJHbQV1hNorHgZ8vVuUn73RjpE8xbxBBLJ",
  "key11": "E3mYgkxBXkYhLddg4ad3HmVRbigaMe5X66GZHPfELS4tNFJEaDipcrA7Qgw6oZYkUsVfJsyGajhhVqTkXASrEfk",
  "key12": "a1FxXKcusNWuqbWS5MmVD2f2ehhVCSyBRT3yJPLxK1ZMWq4jAEpyjYZ6Y7DoFV6EcS9KEKFQb8T7uEN2syJ3q19",
  "key13": "53yaks94zAULoYeRL6T7MSiVBp2P8ipBwtfny1Ec8C2gv6DM3HoZfwzkizzNhPPmBCbunkcUHMTpQvCP5gR8M1aj",
  "key14": "5CWToont9uRA6ErNmUGhyeCFpw8KpC8rJhDVmMRqbWtYfYDu5gPqn2zkGWxiFGAKoL5BywpbbxW3Rub6FoPmkqpi",
  "key15": "YJ1yqqeknVPrA1FFPTv918Zp9A7m7hDncXG516EWKPJrNrnDmYo2R37QP78nzWHwAng75dR6j4d1rmTMgF4NnvN",
  "key16": "4Ap7FSiERp8ws5uUQysJmvxAgENw6qfCh2NoecKDXUdDx3DA6KKy3zH8GgMLrv8vz1XbmCYmE46Kvc7Cod1N869j",
  "key17": "2D9MdrtnSfzCAXM122t9ctzCbJ6kHCzyTZCLZ7W3iWbxWeLwYxdNVTti5kjMTAAJAbYLcjoXjvx2t4TuYXVDGuwz",
  "key18": "5H4bayHDXBw25Yp3iXWGXuXFG7EFoY6EYHSsfbU7nohQZiz7ufA7Fwk5NWbfXFfigBC7wSHV86cMdgppUT7w84Kd",
  "key19": "3VKSzcaA5BNxG74ktNqUDyGzEjW6ejG5XJLLLz9fDRXrV5YuhBwhZJLtj9QhuAqM6EiPgpfd3W2hW2evURmgVVqB",
  "key20": "3P86BQRGWKgtywAS4cYrhMNgjLpvJ7fGMqrdKS9RfkbPCFfMLR8WLYkJrQkBVzLzKqUPBxpfFchKDE6NP7mqJDoT",
  "key21": "5F8W545zkUwBtdau6eb4zaGb5o3BqXjBpAyUMZXXkPp9xYPEUUd632KK7xnCmdYCknShq59ErvWYpnfvpc124xAx",
  "key22": "2RUpTxjPBBe4nzXAYwU9nBDAjEniD2v3X1ZWHbzLAU3U6AJ34d41mBhTsLcKJ3FoCw9DWd34NNjCXVP6wasE1nWu",
  "key23": "2iCK4Hzet1VDcGgxfkv3MjQKtsJM5RNpTXRnATqRSkCdUxHGYfwJ2PA3KVMv8Kh3qiEmdRoSVssRywxzsZMwbYow",
  "key24": "5BfxHjw1RpSj7PnQ2wLjT38cY1XwvW9jvUmhkPVGQNz2vcLk7mQupqsJ2EofckYym1mE8FPz8Jk5m5MEAMKZnWGz",
  "key25": "2V6V8TuSfs44g9AeE9Jo3AMAfiKEEAag5tg7LgRSrmiREzawBnDDp6ZKBGGPVYj9FqDGMiUuhCeqJh5nvbmXZw6E",
  "key26": "5ELJrEGYz3DxqtnLaJbeGDjLbx3TFBLjTZRnG2Z6K45msx2cmX8a7sPF7Gssqs2qvm2QhPD2TLAdDVWhadDoC8Ap",
  "key27": "5vap41K7fJporyGm642Auqc7VpEkfrZ1Ty3ohttriAkACV8GVjSpwqonjeggtSEhh8tikLsy45HCXT3Sa7zVh3wE",
  "key28": "3VBEkBQkz6so17EqApghWD1XBh9jvmEk9tqJ4dWdSiGn2uccreTj8WaBPGi7jSXrD7hiNLAAiSehSVcJUBbQ1VVF",
  "key29": "5pfvdTzGfk4haAfUV29UuQQgd974bbkRRv9xGmMP2Mds4fhxBij1wYgajywB5rsckFVQs3rYD9DUMHcPDkYosZXb",
  "key30": "5CBTBDuE4WMJNL9QrFqxUjyQqSasSCTAygPrWeHj4fP8z7QHCmP6KvtTvWdYvVCuxP5kSzPX3wft54MfJG6TuP5c",
  "key31": "4euixWFcsXKgiwYxEuV7Rj6uP1vzFcgbYMbaPYPRFWVPGikMZmFuuT4tMnLg1JpJag2BqFibyizs6fwnB148TzJy",
  "key32": "2kG5UFxWBPMhoSPqzZErGeKqXZ8eFLedjfhBENkqC7L6FMpCncCmL5aFXTyjxoft8uCyRenmsKE7RVXV9auPPhM9",
  "key33": "2b3L9YPwsQkmuwyHhCuSEiFoMdxPVHbpEpgodGkFYWmgpwgJSht8inpr9KnfCRkw5jjVrZCDrsA3vtxcqaUqqZmL",
  "key34": "zLBZyDyMceE2XDtrv9zUqGneAjyPk3sygj2SxEMnDuK7LjUUWcPrc97g1E5SuTtfR4md5KeGETzWBNEgKuZENA9",
  "key35": "5KUQqzdPBNXWJ8NwMdhYheQQrMQqhzSjK36Nhe87sAPWFepMna34QEyKscg72oWzdZ3hYLw5jAhobhow2LLPg5D",
  "key36": "4m2pYqHVxfumGV3PkNHqKopADJvj1NuQ18JA5HyraviYDVhWsp4uNaFbWX3oL1r5QkPFtaMCr7FomR8AvxMcXYQ5",
  "key37": "55YWG2tp3K3A5tmdpj4XpSxxUpoxUzVvpwfwp8pv1pJvVjurwe6mYwMT7K3QJCeE2nABdsnS5SudZ7CE3qAW9vmc",
  "key38": "5ohruBM2GmX36nN8BuYZGExjmp2aw61jDH4HR9DnQvZBFh9t9pGD5f3aE8aw1Sjpk7iLoMoEp54Fm3BBMwbMCXek",
  "key39": "CPLpugxBhX9U1KseVsbyAkfJPtwD6WtU372W88mCesq4TfSUPc1Hx4kcENwjbXPfAHCGTALUDXePMU8rthwji2R",
  "key40": "5K8C4USpMzKzKTxo1Vk4QqXkeg7yqHRzfb2opQjDKMMELZnK6kgNi1iofFNNRY4SHHjjTn9u991o1ZeqUVzJZ4e6",
  "key41": "3pEjpRcX8HSLAKCoAuFzcpBmiMBDsRNJ6kqvSArdBGZT9YA4xWieBZ3GsPCDjZrZ4b5DqetDK63rtwqMZ67X4cu9",
  "key42": "57UauhxtpnoenBJXBemEc1KFxUKVuYRNWF9i4q5gCyk5M2w4KUek7fdHEPFXhixZXryz138y21Y3w8eek4NTPayb",
  "key43": "5knKCnrNkLdJe8ES11zmxSNjTojkcwEazqdc1fzJeoHgqFUhEPtcsMEzcrqtFgukw3MWp2fCyBVgszdWHLy3BQAR",
  "key44": "5M4e2riH7mptDeTvxR69D6FF98WkqrJoNzs5Por5J4buUD3x2SBMwADPbRwyYkf6DDPNhTGfgE1jEHftjFUkvdid",
  "key45": "61JHaJNq3a8sEa86QrnZeWMxndL18FymU5RCxWZtqEmrLiYxxC8hfKrWhRPQ7tX7Gv96dsGJwD9KabQ6TVAgnrxY",
  "key46": "3LFoDYehpBqvs1RuBkJw5wFjou1hGdDs69MZ6117dKUU5jAoiXAK7u7R9qqKWT5CJMnyToJbYGvyak4fi2bGxvXL",
  "key47": "mwskFJN8Mf9kzqVqwwoMAuKG4ZRwNomcez1jJ7Aeu6f7TbqaEq5n8kFSgdBB5cP9SjTyJf8SQQWdnSdR7fywKNv",
  "key48": "4VAQXdzSWWoe1rNpszLSfmjqrvpfhYsZk7q38P3RNqBDVmFNTCuKp64X9NoKFezCoiRYwL9Tcd9tEkAx5tqvb86w",
  "key49": "5khgydwT7w7Qq9mCR4VDabzidSN6xhogsAdumRtKrnkE2WQsKGUXKzhaWvaKbNwXjPf2CBcDAG2PFQXxhLwSXurf"
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
