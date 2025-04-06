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
    "3FmWv9MH1LBbjfmVukWMSRuwe9ThNEdd7JR4d6AZXwBFbrvqNe9tVQXdN2fdBockaYPQJRXJw4DEor6mTAtajyrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMqsTB5Uu6zv375ZvKtXhFACMd1dkh8oRx8wdbUmeckmPdc56nbknjdaSxaTGQpmugmcttE2NFDWG8zPYZSAq7y",
  "key1": "2pQjdSue87mrB7sjNa1LU6Goae9RLfkbEBPPGC5PSBnSkXgxJLzy3NT6kr9kEiaYeoDCnXmvJi3svb8226EmSRh1",
  "key2": "kz3Fq68PSgEf44415oaRX4xkarPKArUiqDQ2a4T6jbB3Umj4W2zqgMSeDrauigJNnU96JgdF6VTupZ9XrUXt14y",
  "key3": "4HmysWQqvuK5BGmWuTu7yzcGAB7kXvxD3SaB4RJ3r2KjoEG4ga666b8HKQiUzorSGXKJzLvXSDM7F9U6uqNH8NU4",
  "key4": "3H7oFNLHgPYZAVu4uSy4f4haANJ7LVdChy4SHrRDn4fo9YXmSvFjDjurRdT1tPtxq4UkMfPtVwdeS6LKZpeATyLV",
  "key5": "F6fjcZPr5WeJtKyygEzLq6q4WdMV8WdvYkReLzhktZ9UgVtvS7vepoTzGMxKpkKEUT1VdUzaJ3b11NJEmAMECe8",
  "key6": "5yosxt2nKTZTJ2iaGoagzXZTAmQepps6weD5LLSpFTdG5RQUNM4tHp5VunAFFcQFZ7E2DNBYXFaSqLCqepVLSi2H",
  "key7": "4keT54XTeJaLLggg9qmSeqGH77PW9RPY46PzA8qyz1sp7J142moose3uoUYHcKpEgQyx1e9aMUfg79iBNgCXdX2n",
  "key8": "4j6Us1Htw4PA7BpA74qh2E5CAuHhCJx1KWmgS7nR41RWfVZfCPN3b91Wodhwh9sgVLes19juQhNJV1LpBPtYDjrB",
  "key9": "dyr6cUJz4PJn47tHJ5KkmYrLGFexzKUNYb3RKjiMMjk2vsVmkqLrezjLM8NtX5FQro9q3erFPbxCRjyW6e47KA2",
  "key10": "XywtHkoDxgmGLz7Bvgu55J34nKcnSBLJbPY1pxq5MNtffn8mctPJz3C6N4i6XfPLuco81X4eNgoZKdDfV65nVM7",
  "key11": "33APsYHTca9e3j4DxKuP9A27Hq4K9CgNjz2U2F9a3p9pB2Y9JkEqcfNGg2aKcwHz5XTAfjH1jeNs1o2KaZNmcz1T",
  "key12": "3j2BMmUFDP8kFkGvd5b1sH1DT1JBoTJd48AseUMUPRujmZVe724uY8u5vgEVuadPKZhaFemfGz5LBHwT1cxcM3Jp",
  "key13": "2eNcxstSoUgpYMH7AgtRqRnmHERfVmHzQ8YvmC78hu9UVtbJ81q8Hk1qZjBnHvQVvX3vyDzyDNwZBA1hi2UxNNgm",
  "key14": "59UVe7Jxp4xLYsVXRL2YfmLTnChQMNpKm3RYFhPftnWKX5CDCdVaSZxsTjxmHSuq3owqwYBFeThfkJLthdkeq5ZF",
  "key15": "2XpFsyXDJJXEHZKScHPEP7DPCYr5gBAkyBwaEva3YEsrWgVfbFF7nwxLFTQbi1wZMrMtJ2KBLYEkhBVB8gi5rMjf",
  "key16": "3tbzCT5tmC5gqVztAbg5BgUGSJCCmFWmHgxMhsAEHNmZGpHqA5D7EGUKoNxYNrzJZa1q9obC6zQ8gghCywEekt3M",
  "key17": "627dWaeXEaQdwA1fV2C9qtByLnFu2rFc3Pgd8dMwNPmKBZaq2tZ1pKTBt2mM6fhFDHi9NmHtTMC99TUPzxzHacum",
  "key18": "5RMHt1dhh1cT4wEyrT3J3zBvgyFWvUgqaf6vZpMKC1cZQ2Yxertap2RYsjiuvPPSrBsWVwFXbm2td4v3E5ShGuZt",
  "key19": "2HGfQKbVquPFKf8fDT7dm6FNeVNZfYf2g1BFrovXDSTamFLVDV1x3a7YDiYL5iL9c7E7V4h75UBvySjqXi9ACncz",
  "key20": "3VSUVaK8Jc6Lf4iATTSjy9qL8KwJAjajD3uCbdkms3BYfKPTgCWhGTezUySVLzbYuU9ZKevoHpkYXZaZ1mF8gfR5",
  "key21": "ApEqsPFBRoTsfmYVFs5YLVi32DYM1BPLM7B2czbEJp46fXuxW1ZakibsY2biYzbW8Br4fe6g66oGFSX2DAmpxwe",
  "key22": "sNmxCDyMY8hTJrjpusuXP38xDnmf1wVMRPtuKia599Vdy8iV5ohwsCRqDPRM7fRHEwoM85VCrPz2sNc3ARdugBG",
  "key23": "3XGvXsZpNEuchZ7XReDd9aghcrTv7wAXWQjeh1QvytzPYxGQc5mKibxfzyDkc7dDZGtUbTmUaRCj1Jau5uAXzydk",
  "key24": "WBayDxMEfwTwwDZ8pAWthPskTSuGCp7Yn77hKGYvyS9eKmafABUHxenZXVd6yNhjCuFTWRWRob69vP4UZ7MVJ2u",
  "key25": "2qg8behW9rxJn4iyuonhag8kFfBaSd3V1NxvYTTy7y8azyohEMeZwt73moKJjYFqP1XvnU7gaPsJGWHUcuiFwtHp",
  "key26": "5aMcfV1JnpVJ92DAZVyxHohBZ8U1sCPMDr4yUUauaKzJ8eFkXia93pSxrVQk7wWbxY3eH493Au1XgwVGhza5byxW",
  "key27": "n6PHHZWydnL4vMs9JrnsvAi5tYXmDi3A6CjmErY2JYiaM5Gqbnxioyx2gevgTLrqNmWAJ11RttXdbCPy8Nz9AvP",
  "key28": "5CXcWMo524NngmtjigdoXA5BPgnto6nUTzczgscEovst9vk8QL4FhshjbMojpcMunE8scQLrnhNL4CXEPvkSkG9G",
  "key29": "2dkX3adxmTaAoW5FixJt3Ek1d2Pygs85J2itd1Wg5Ra31Csddca6bkxrnsAoyFj76wy6oT8wL6izXwW2GdV51Hg6",
  "key30": "NiENrd93QnSBx7tvSqmrAp6LaSjupG55AJbcY5gSsbawThZZR8wS1vv2YuGb8naBZkVXxAh58zqjonSVgRWoceV",
  "key31": "VaSgQKwNXGKD3eNQhUJHneb6zY18YoN4YgStpEDoNj9yT1mhj5UWKay7zGr1JoDcrHg2wtDDKf7MrGU1DhYPPns",
  "key32": "27WzgsnUC6PcAC4aTgntc3GiWth5FZWkRvJaQWKsTWnkfphfL9htXFpAct61nMn2unbRZ3fsEBPPh5MadMEVdD58",
  "key33": "WvRMra2S9n4u9KmPaRRmTh1tR3iLaskxwcjix24cALt6jhqu77dEU7ynuc3mK5XiRWcnnDVkVPQTFfwvyjeXSHc",
  "key34": "39tRSauPbo5g33AuMYWoidUjKem86RUMirAB44JkaMC2Jr5Ck4qLyREW2tidanfbfeCWMJDRatT7T2Qd3Kuubyr1",
  "key35": "2JnRaqbJmbomkVcMvwfC1N3TuZ9ZaQ3s6hw7yWhKCXDk6HWfo9LwzvXMikg6hCFKh4tUj5cfBGAxHDJG2zx5YR4q",
  "key36": "4SgFZbTuQV4EkUtsCsQebBWnD6RqZcFoS7XN7s4isozjg77fLTdefGw1YsYMqHpWGhf5iU19Qj9Uyins6GugTZ19",
  "key37": "3t8PWJG89kA1uyX9rhhKDPUgtpD9sefG1UP6wCJHMb27govj7KKKatrmA9UkNVZWjnPkgKVV2k5jqVY5C3o3sPjy",
  "key38": "5hTPtC8TuKXMsKBK2D8suQ42HphgMfaaJYMkGWntxyQUm9KhedA7yh6zk3EMHXXFseKQH7UFLrCTf2Y4Pcy8qubT",
  "key39": "51jR2Chzu1BciVKzcTdVjrKJ6B8cu7aDxmPhumchbC5qvtcxk731CrCpknGYXUWHzb5MPMSXseJxG51rBXLQPWcp",
  "key40": "595CjutVqZf8BK2GDgWk62dn7txzrSWTgWHQnvvPypstBAWyYzWcYVhbg58JKfpxJ4wf2fsZKkUc2fqoEHegbb8P",
  "key41": "4WFFj921BabZsG3WfTTx4gbWy3AK3CqpRG6t93uYN9oFj3tDzFvCzbnnZgcEoEiw8jSewHq5ikP3mpARjQPVb9nG",
  "key42": "2CaG7Lmv8iHwComjiCjHQ14uJqNBBruNbFw7cpGypRbTNTLgh2ENjgEnBDLLPzcb4Pk3D9w1n9evRH9GVewwDDEx",
  "key43": "38C4id8WMK88TfMbeoUtrWFgYhCxUnE1MQowfiH894BRzy6FyGK7GNU2VfGgw78kVtSCc42wwnqXkMNUsGvUtsf4",
  "key44": "DnY4PQe7Fyoygvbt1s1eh1K1edWXGcoaqozxwRXMxt2K4A3noUnzj2dEnvaKptzq9rQoeQ36mfnR5S635tFN1rz",
  "key45": "bgfJbB3inMCi72HtZBRE7JF4LR8G5iANngkMTWcBFCQRcHjuYJNFd98gLGRxkKJ1bsPtkJgiSqrKmErgsa9LdV1"
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
