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
    "24rqXLhadNttRDNxwaQKVaTFYMbV6eJXiPYT6d6KfKBbgqfdFgFBztNSvnHmrayT7DbgBHtX34SXt59QkAzcvh4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKeQrtzyaxA2jWnqBAuY2PuxKqPWavhzxNuxi38qUaTdepjsV7K59xqKuXD8JPVrtVWmXZ3D9FHtvDX1YjWsutF",
  "key1": "5aNpySHLFJuRc9zNf5BbhNtgukdekKgBvmWaUA1vWJs61vNmmADEmf5uBNoDJTijERZyLf6WuwvDeni7QfDcw1LC",
  "key2": "3bbaXQr7Nfu3gjsyGcE17RXanL26To6tMk2gmNkMM63iXzPnfGGUYhM51PpNvgngwTUQz1VNmR29woK6LRLecDFL",
  "key3": "3ioTYaqdf3oM4mKG5ixnrhAK2JYJ1DoEJiF3N7YcrhdTGKnDoa1yAh271TWN5VB8QaY4miirKRMpPqxmLQW8SxRZ",
  "key4": "4M7g8jgZezngsdb1tNa9vPJ9nUiNp4LUVhf3DvdTF7spvVNue1tWq9oWKLyNr7ga358D4reNdJBMbQoesPwh69xW",
  "key5": "iszuVswGvMdPktMAcPEhph9jwP6e9s5i1LVmhruRRYCWyfnU2KuFCWWyZGrNAF2o123Dr5Sf8r1tGVWL32ehxNb",
  "key6": "5w73Fa3PhNddBP9mgTiZgnt3h97W5MY1nGgvJpwDvcbbPc6pjp2SibPNEGK7ivFNspkZJ8yVK28d7neaM4Go4GsX",
  "key7": "5iW6erLs3Kv4JFX11XemwUFvdhLQy2gzWzauwkNWiHVQ4ejHEuBHNHyfYBF3FrMsb1fe3yqhfzMG2NuHheda8sYQ",
  "key8": "3TD8C8hJiurEyjccvcgrsEoXCDyja9LgV5QvrqGrf3v7sRsMyeAovNQ2xRqJvWzvHqhv9ew2vQhk7HYRPZYhS9Dk",
  "key9": "3kZiT1LG1LPzMpmWE4YCY31vQjs2qXscuZGr8CNJkvFqWwRR98Q2sJxPnoGb2GPAbYRBUe5aMvhYnX4v2XYrqwbu",
  "key10": "r9er3NHyhYLuaNCo7qTVPTffvYNVQFDPRVzgoFjfeeXdVuoFkvyGxUQujaN7ELvDu3L3VWtW6JTYocDBwsEXRfu",
  "key11": "dzbD7gaJWkkAWowRYj9PQ6G2FtN181e8pQwXpFYNbQPCMurSKuJPrHpG7pWzsYhbUKQAfWysPsUGzPLwtymJqCK",
  "key12": "5ZutTfYfwGgGm4imy33WyZbfadtsZH6sEx4do3UnNBB5Qqx5cJ8TbLrvPSJBQ4737qeSf2kZXXdVxdB492hLe3v4",
  "key13": "5J4BLFrCS2KefukkkniCYBN7KYkPKRiteyAvQ77h7qH8Fm585cRYRmfBGV2Eph2qeFwmtX5suPmUTopEHma31z9H",
  "key14": "5tuggMwVBJPePMLeLhzwCb3VXF5Uf6Y46H7Wcv6SgfWSX2AA4QzqN92JPuitqfUQSVpzxjkmSytdT12zbdzZmEXj",
  "key15": "4dh5wDuwptPEiaxYvYynMu17Kxv8Aw1PHkEsC6dSB5Uvg5NGKJaUvTYDxNJwLH4cuMiSgL6Q2t1abCifqH3eYoHZ",
  "key16": "GTMVQpt3Hb1bAb8eHfrhqjG5Z3D6HMvBMchP9UB62DyAJ4BHKQezUg4sbpBqoiUSvHiKLTFfuVhYwuiAQgCiZ8C",
  "key17": "4C6UA5G9JdM9MSth7abcx8fWT1SbEqxaHPkaJwfjKrXSW2R8XY4FWNNyiUoUJW8oymngVk531NsPA4yK1cvnVpL3",
  "key18": "2RzbiaG5juAB2pfrDDYUuJxL6qNZRUvVgqcn5uZ8my4BrfvpBxqPVbDXEYsAjLRh3tTaDhwpFBgxHqYpiVpLA5Re",
  "key19": "2oyFXRQgmzk3KmzQaPvLd9ZxkaAWKhyfwpwXsSJEULkuM7roDsicv9dPcxAhKvneGxcQpNt8ggByhDztiyNfzwvZ",
  "key20": "2wnxcVjDZWvmydtPfrfZbfoK4kERXNALyeLZT5aCT2h3cXbkxxBHzqTyosxsKWKMo4bbyTNdViFs7FTuVzt1EJsA",
  "key21": "64oqBzDwDMNrhzeiG3uZkR6LzaLQodWVipY3ibtxcwJpfYq5tfmrBwiYt87kFU64iRZaToXdAaMfgCLNS15sCf9Z",
  "key22": "357dr3vePUQ6dZcwkuxRJiRmidqwHWVKgrNg8XgRtesDwZYq8JHXAZaMBBqGFZkisJj754TRi1DM47qoGnqEiQnv",
  "key23": "DCusVRC7QkatB9zDXm9vAG8ew8UPHbqWJ63RppwnvMaySWKGue3CbNumm1d2BCWFQ3eehRgn6cdCqfejN2aykbq",
  "key24": "5gMLeXk9sCeKrFRX1cEFUmwLcYBWyYxrgRwJqGgrKDU3vRtKt1tUgSxggRGhXgVtStbypu5D6tHyMCJ49aWMJkh2",
  "key25": "4VmtnK6jbPAFX8tpEhZ5ZWpeDTyESBfH4BfV4sq3ecnzLW4EiJsgxEx7gqbx2bBbDZWfGLSmc4aCWsiVvdAgiW5M",
  "key26": "5DqVHq4cQG5HH2n7tgc24S1UrrFsXE2FN5tGCBUbHvrnfW6R4eCft7LdZUTZdCs4sPXrAK2vQL4y6XY9JhLMDm6R",
  "key27": "3FZD8hZM12eQM3UwvyabVnkEkEtZFoMCJD6x2nGTbLBYXQGjDbxyQxHvuXKzNKdfTAiT3qo1EENMfr23KVMi8BBe",
  "key28": "5Sex8vTvpGXSmBf2MtrkeFmWVWMgVGNNxNmY1xU3ybZvDfkWqpsEgfLhGAWtmv6agiXVvCQsJx8AaSbgmMLcJ54e",
  "key29": "7TUXUSixMmXkVtUhkLvVuE9UvGAqjgZQeQ7W7LAnAPfEJK2bYP2r4FDk3t1oZmyTZqHiMyzNqeKYgeCfBF28pBP",
  "key30": "5ocyvg3dbpEmAJwyRLa1eDNenQj45oBioknoKnzsRsi6n4ahwCVZHSEp77VQWbro4cmPU4kV8FoGqPNQDeX3wD8M",
  "key31": "2ox2XoHoaQLeLPZ2f4ct7fXZrphYmqs8KnJeBQD2r9AUaJmrzJUaWVTzQvyzG5hm2xXtzTeko72pkMHbpbScZcmK",
  "key32": "3chM9QyrCaZMF5nsaV4beeouHKxryVoG5EvVxdkasGakND7k9GJwBP1h8LQpHNrdYTviC6nZkYZGN6wXy5iZWx1q",
  "key33": "3RP6HGgJ7YfW5WtgMyvSMXJDNRk7GBcX2Y5aiStRdtYeRjuWhsYrFSY88abJS2oqNbYzsNYXJxuqQbodxzvgWN7B",
  "key34": "5PXeoyv2F1g5j5JbpPbzAsLFHPbNePACBEn9QPNV2cck6WUKQkaTbYvxcuRQ5LL9rPyXLTMAs7MzbsHDXnnoanua",
  "key35": "2n1ZfuwJwb9cQKsAHPKwKUESfw8RN5ByF8YtkRj5Y1Jp2ziqZtn8ZqGRqHuF8BSpeBKzmRH9auYmDSEYN2pvcqKd",
  "key36": "5ZZm7zys35NsWkhCsBicVKwv3qMuVSWjs3yfRjBk8VNTrN9pLppXLjhRR5oAAFmP2qYia66mxH1ULEwm47JL5ahq",
  "key37": "61nXvfMBfT2cPtJHVqVUbmbcu3Ur7x5JKsPgzPyUwPuBdv4mpmpNU3Srb9sQPQxEg3TD8efQs3Vvp5g2B32wNbMF",
  "key38": "5fULfP4uZ7wxHcdttkKmXiyCvM9ySoBHYhVttTRsr4rdh6ET647a3YH3Xu41CTdKb2fVBbE3a1AJvTU3FXzDWizF",
  "key39": "2vPegBdMmiRCSpUqZB7smqCrwQQMn6rmLSikWSXgFjN4cGtKcVe6Hh6EsNoc4FjGdrPPwKRWLeEGsiCwSRNQ33BE",
  "key40": "5JTA3LCW5DrEMvHTznsSC414ANw3oLxisrFY8eRPDaJpZSY7jmUo8hGu81XmgMWE6Tefx4nW72NhsKtgZukaLV3K",
  "key41": "5dkt7nP7W3eFuYWb7BAQMDJb6WiuwZ16KvSbW1p84J84bjLfe3tHxgtP77fNBjpdXXk5H5F5B3vKFNaFvsBPDmre",
  "key42": "63T8jRJuK5Nxc5puUHdHKT5GtcJvYQWcKSbQyB3yfCg92LrtNhGErepdmhh8tDTH3DEmR6susMsrDiYBNH7U14ri",
  "key43": "3Czzp72fGXLri4QkEKMpqJR1DNSCTEbFTyjvs5gDYX1hwTbZZxJuWs43Cuhw1yBh9J1t9LTqjFUg5S6a6kjMXD7k",
  "key44": "3BVm37csTqYsrmXNaP7zXFjLBPeFjcrtw4K4zPVZVjxUVed3VesMFBcezVSHb9TQKEtQoifWHzEtnHgV7o2uNvJt",
  "key45": "6674hKPPuv9KSV1yTi6C9TUyndByEDgAHWACop9bJRQg2UnbK18nrnMeRTYFK7ga5NXjMfxKrNoaZzXZDrN3HV8K",
  "key46": "42NQk6MMbu9DVpzUBn7w2hWMfwFWufaKMPN6q7zdXGgf2Axw5RKKtHvXiRyCFj1FDKGzQLzDDH2jmkBmRiZe6WNr",
  "key47": "3vEsrBTjiHHFpZetKg5n7bn3SHpmE5MmSDNNTxH1iupVLM3i7CWyEnWQGkRhhUNcsFzD5iPbuRWqXSusigcTq2tS",
  "key48": "4BN1Fm5BX6AYwiLHLvLW9ZZERTCX6p6Q7yRchYduMNJhUztzhFZ9cLkg7ZMoM8rXup83RxEhxbNKd4z3NB3uM9Pt"
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
